const regExpsForPerson = {
    name: {
        regexp: /^[A-Za-z]{3,}$/g,
        error: {
            message: `Enter correct name`,
            element: document.getElementById(`nameError`),
        },
        formElement: document.getElementById(`name`),
    },
    lastName: {
        regexp: /^[A-Z][a-z]{3,}$/g,
        error: {
            message: `Enter correct last name`,
            element: document.getElementById(`lastNameError`),
        },
        formElement: document.getElementById(`lastName`),
    },
    age: {
        regexp: /^(1[89])|([2-9]\d)|(1[0-2]\d)$/g,
        error: {
            message: `You must be over 18`,
            element: document.getElementById(`ageError`),
        },
        formElement: document.getElementById(`age`),
    },
    eyeColor: {
        regexp: /^[A-Z]|[a-z]{3,}$/g,
        error: {
            message: `Enter correct eye color`,
            element: document.getElementById(`eyeError`),
        },
        formElement: document.getElementById(`eyeColor`),
    },
}
const regExpsForCars={
    carBrand:{
        regexp:/^[A-Z]|[a-z]{3,}$/g,
        error:{
            message:`Enter correct car brand`,
            element:document.getElementById(`brandError`),
        },
        formElement:document.getElementById(`carBrand`),
    },
    carColor:{
        regexp:/^[A-Z]|[a-z]{3,}$/g,
        error: {
            message: `Enter correct color`,
            element: document.getElementById(`colorError`),
        },
        formElement:document.getElementById(`carColor`),
    },
    engineSize:{
        regexp:/^[0-9]\.[0-9]$/g,
        error:{
            message:`Your value must be through the point ex(1.2)`,
            element:document.getElementById(`engineError`),
        },
        formElement:document.getElementById(`engineSize`)
    },
    wheelsSize:{
        regexp:/^1([3-9])|2[0-4]&/g,
        error:{
            message:`Wheels size could be from 13 to 24 inch`,
            element:document.getElementById(`wheelsError`)
        },
        formElement:document.getElementById(`wheelsSize`)
    }
}



function validateData(regExps) {
    let isValid = true
    for (let key in regExps) {
        if (!regExps[key].formElement.value && !regExps[key].regexp.test(regExps[key].formElement.value)) {
            regExps[key].error.element.textContent = regExps[key].error.message;
            isValid = false
        } else {
            regExps[key].error.element.textContent = '';
        }
    }
    return isValid
}

