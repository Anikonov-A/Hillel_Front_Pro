const myForm = document.getElementById(`validationForm`)

const regExps = {
    name: {
        regexp: /\S/,
        error: {
            message: `Enter correct value`,
            element: document.getElementById(`errorName`),
        },
        formElement: myForm.elements.name,
    },
    surname: {
        regexp:/\S/,
        error: {
            message: `Enter correct value`,
            element: document.getElementById(`errorSurname`),
        },
        formElement: myForm.elements.surname,
    },
    address: {
        regexp: /\S/,
        error: {
            message: `Enter correct value`,
            element: document.getElementById(`errorAddress`),
        },
        formElement: myForm.elements.address,
    },

}
export function validateData() {
    let isValid = true
    for (let key in regExps) {
        const regItem = regExps[key]
        if (!regItem.regexp.test(regItem.formElement.value)) {
            regItem.error.element.textContent = regItem.error.message;
            isValid = false;
        } else {
            regItem.error.element.textContent = '';
        }
    }
    return  isValid
}
