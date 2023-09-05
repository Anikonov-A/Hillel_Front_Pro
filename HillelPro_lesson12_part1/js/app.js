const sendBtn = document.querySelector('#btn');

let cities = {
    dn: 'Dnipro',
    kv: 'Kiev',
    od: 'Odessa'
}


sendBtn.addEventListener('click', () => {
    const myFormElements = document.forms.mainForm.elements;
    const nameInput = myFormElements.name.value;
    const surnameInput = myFormElements.surname.value;
    const birthdayDate = myFormElements.dateOfBirth.value;

    const sexFieldInput = myFormElements.sex.value;

    const citiesValue = myFormElements.cities.value;
    const city = cities[citiesValue];

    const textAreaValue = myFormElements.textarea.value;
    const languagesElements = myFormElements.languages;
    const checkedLanguages = getLangValue(languagesElements);
    const languages = checkedLanguages.join(', ');

    document.forms.mainForm.classList.add('hidden');

    const parentElement = document.createElement('div');
    document.body.appendChild(parentElement)
    parentElement.innerHTML = `
    <p>Name: ${nameInput}</p>
    <p>Surname: ${surnameInput}</p>
    <p>Date of Birth: ${birthdayDate}</p>
    <p>Sex: ${sexFieldInput}</p>
    <p>City: ${city}</p>
    <p>Textarea value: ${textAreaValue}</p>
    <p>Languages: ${languages}</p>  
`
    const backBtn = document.createElement('button');
    backBtn.textContent = 'Back';
    backBtn.type='reset'
    backBtn.addEventListener('click',()=>{
        mainForm.classList.remove('hidden');
        document.mainForm.reset()
        parentElement.innerHTML='';
        backBtn.remove();
    })
    parentElement.appendChild(backBtn)

})

