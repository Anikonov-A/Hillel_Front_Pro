let currentPeoplePage = 1;
let currentVehiclesPage = 1;
let currentPlanetsPage = 1;


// function getAndDisplayData(button, nextBtn, prevBtn, currentPage, callback) {
//     button.addEventListener('click', () => {
//         callback(currentPage);
//     });
//     nextBtn.addEventListener('click', () => {
//         ++currentPage;
//         callback(currentPage)
//     });
//     prevBtn.addEventListener('click', () => {
//         --currentPage;
//         callback(currentPage);
//     });
// }


function getAndDisplayAllData(urlObject,elements,elementsKey,currentPage,dataProp,dataPropKey){
    const{btn,list,nextBtn,prevBtn,block,modalTitle,modalList}=elements[elementsKey];
    btn.addEventListener('click',()=>{
        axios.get(urlObject+`?page=${currentPage}`).then(response=>{
            const result = response.data.results;
            list.innerHTML = '';
            response.data.next !== null ? nextBtn.style.visibility = 'visible' : nextBtn.style.visibility = 'hidden';
            response.data.previous !== null ? prevBtn.style.visibility = 'visible' : prevBtn.style.visibility = 'hidden';

            result.forEach(item=>{
                block.style.visibility='visible';
                createElement(`li`,list, item.name, {
                    'data-bs-toggle': "modal",
                    'data-bs-target': "#myModal"
               })
            })
            block.addEventListener('click',event =>{
                if (event.target.nodeName === 'LI'){
                    const listItemText = event.target.textContent;
                    const item = result.find(item => item.name === listItemText);
                    console.log('results:',result);
                    console.log('listItemText:',listItemText);
                    console.log(item)

                    modalTitle.textContent =  item.name;
                    modalList.innerHTML = '';

                    dataProp[dataPropKey].forEach(property =>{
                        createElement(`li`, '#modalList', `${property}: ${item[property]}`);
                    })
                }
            })

        })
    })
}
