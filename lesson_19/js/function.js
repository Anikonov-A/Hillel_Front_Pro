function getAndDisplayAllData(urlObject, elements, elementsKey, currentPage, dataProp, dataPropKey) {
    const {btn, list, nextBtn, prevBtn, block, modalTitle, modalList} = elements[elementsKey];
    function displayAllData() {
            axios.get(urlObject + `?page=${currentPage}`).then(response => {
                const result = response.data.results;
                list.innerHTML = '';
                response.data.next !== null ? nextBtn.style.visibility = 'visible' : nextBtn.style.visibility = 'hidden';
                response.data.previous !== null ? prevBtn.style.visibility = 'visible' : prevBtn.style.visibility = 'hidden';

                result.forEach(item => {
                    block.style.visibility = 'visible';
                    createElement(`li`, list, item.name, {
                        'data-bs-toggle': "modal",
                        'data-bs-target': "#myModal"
                    })
                })

                block.addEventListener('click', event => {
                    if (event.target.nodeName === 'LI') {
                        const listItemText = event.target.textContent;
                        const item = result.find(item => item.name === listItemText);
                        if (item){
                            modalTitle.textContent = item.name;
                            modalList.innerHTML = '';

                            dataProp[dataPropKey].forEach(property => {
                                createElement(`li`, '#modalList', `${property}: ${item[property]}`);
                            })
                        }
                    }
                })
            })
    }
    btn.addEventListener('click',displayAllData);

    prevBtn.addEventListener('click',()=>{
        displayAllData(currentPage--)
    })
    nextBtn.addEventListener('click',()=>{
        displayAllData(currentPage++)
    });
}
