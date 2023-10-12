// element:"",
// attributes[{}],
// content:"",
// parentElement:"",
// handlers:{},

const myForm = [
    form = {
        element: 'form',
        attributes: [{id: 'myForm'}],
        content: '',
        parentElement: '#formWrapper',
    },
    myLabelOne = {
        element: 'label',
        attributes: [{for: 'inputOne'}, {id: 'labelOne'}],
        content: 'Enter your house Address:',
        parentElement: `#myForm`
    },
    myInputOne = {
        element: 'input',
        attributes: [{id: 'inputOne'}, {type: 'text'}],
        content: '',
        parentElement: `#myForm`
    },
    errorOne = {
        element: 'p',
        attributes: [{id: 'firstError'},{style:"visibility:hidden"}],
        content:'Enter your value',
        parentElement:`#myForm`
    },
    myLabelTwo = {
        element: 'label',
        attributes: [{for: 'inputTwo'}, {id: 'labelTwo'}],
        content: 'Enter your number of floors:',
        parentElement: `#myForm`
    },
    myInputTwo = {
        element: 'input',
        attributes: [{id: 'inputTwo'}, {type: 'text'}],
        content: '',
        parentElement: `#myForm`
    },
    errorTwo = {
        element: 'p',
        attributes: [{id: 'secondError'},{style:"visibility:hidden"}],
        content:'Enter your value',
        parentElement:`#myForm`
    },
    myLabelThree = {
        element: 'label',
        attributes: [{for: 'inputThree'}, {id: 'labelThree'}],
        content: 'Enter your numbers of apartments',
        parentElement: `#myForm`
    },
    myInputThree = {
        element: 'input',
        attributes: [{id: 'inputThree'}, {type: 'text'}],
        content: '',
        parentElement: `#myForm`
    },
    errorThree = {
        element: 'p',
        attributes: [{id: 'thirdError'},{style:"visibility:hidden"}],
        content:'Enter your value',
        parentElement:`#myForm`
    },
    sendBtn = {
        element: 'input',
        attributes: [{id: 'sendBtn'}, {type: 'button'}, {value: 'Send button'}],
        content: '',
        parentElement: `#myForm`,
        handlers: {'click': validate}
    }
]
