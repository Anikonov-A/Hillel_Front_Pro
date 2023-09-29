// let getCitiesValue = (cities) => {
//     const citiesArr = [];
//     for (let keys in cities) {
//         let citiesValue = cities[keys];
//         citiesArr.push(citiesValue)
//     }
//     return citiesArr
// }

let getLangValue = (elements) => {
    const languagesArr = [];
    // for (let i = 0; i < elements.length; i++) {
    //     if (elements[i].checked) {
    //         languagesArr.push(elements[i].value);
    //     }
    // }
    elements.forEach(elements =>{
        if (elements.checked){
            languagesArr.push(elements.value)
        }
    })
    return languagesArr;
}