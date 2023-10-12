
const regExps = {
    first: {
        regexp: /\S/,
        error: {
            message: `Enter correct value`,
            element: document.getElementById(`errorOne`),
        },
        formElement: document.getElementById(`inputOne`),
    },
    second: {
        regexp:/\S/,
        error: {
            message: `Enter correct value`,
            element: document.getElementById(`errorTwo`),
        },
        formElement: document.getElementById(`inputTwo`),
    },
    third: {
        regexp: /\S/,
        error: {
            message: `Enter correct value`,
            element: document.getElementById(`errorThree`),
        },
        formElement: document.getElementById(`inputThree`),
    },

}
function validateData() {
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