const sendBtn = document.querySelector('#btn');
let cities = {
    dn:'Dnipro',
    kv:'Kiev',
    od:'Odessa'

}
let getCitiesValue = (cities) =>{
    for (let keys in cities){
        let citiesValue = cities[keys];
        citiesArr.push(citiesValue)
    }
    return citiesArr
}
const citiesArr = [];

sendBtn.addEventListener('click',()=>{
    const myForm = document.forms.mainForm;
    const nameInput = myForm.name.value;
    const surnameInput = myForm.surname.value;
    const birthdayDate = myForm.dateOfBirth.value;

    const sexInput = myForm.sex.value;

    const citiesValue = myForm.cities.value;
    getCitiesValue(cities)
    const city = cities[citiesValue]

    const textAreaValue = myForm.textarea.value;

    console.log(textAreaValue)




})

