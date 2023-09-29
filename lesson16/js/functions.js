function createShowBlocks() {
    createElement('div', '#main', '', {id: 'leftBlock'})
    createElement('div', '#main', '', {id: 'rightBlock'})
}
function createModalWindow(){
    createElement(`div`,`#main`,``,{className:"modal fade",id:"myModal",tabindex:'-1',"aria-labelledby":"exampleModalLabel",'aria-hidden':"true"});
    createElement(`div`,`#myModal`,``,{id:'modalDialog',className:'modal-dialog'});
    createElement(`div`,`#modalDialog`,'',{id:`modalContent`,className:`modal-content`});
    createElement(`div`,`#modalContent`,``,{id:'modalHeader',className:'modal-header'});
    createElement(`div`,`#modalContent`,``,{id:'modalBody',className:'modal-body'});
    createElement(`div`,`#modalContent`,``,{id:'modalFooter',className:'modal-footer'});
    createElement(`h1`,`#modalHeader`,`Modal title`,{id:"exampleModalLabel",className:"modal-title fs-5"});
    createElement(`button`,`#modalHeader`,``,{type:'button',className:'btn-close','data-bs-dismiss':"modal",'aria-label':"Close"});
    createElement(`p`,`#modalBody`,`Some information`);
    createElement(`button`,`#modalFooter`,`Close`,{className:"btn btn-primary",type:'button',"data-bs-dismiss":"modal"})

}
function modalWindow(){
    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
}
function hideBottomAlert() {
    const bottomAlert = document.getElementById('bottomAlert');
    bottomAlert.style.display = 'none';
}
function showBottomAlert(message, alertType) {
    createElement(`div`,`#main`,'',{id:"bottomAlert",className:"alert alert-success alert-dismissible fade show",role:"alert"})
    const bottomAlert = document.getElementById('bottomAlert');
    if (bottomAlert.style.display==='block'&&alertType==='info'){
        hideBottomAlert()
    }else{
        bottomAlert.textContent = message;
        bottomAlert.className = `alert alert-${alertType} alert-dismissible fade show`;
        bottomAlert.style.display = 'block';
        setTimeout(()=>{
            bottomAlert.remove()
        },3000)
    }
}
function enableTooltip() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

}
function createModalButton() {
    createElement
    (
        'button',
        '#leftBlock',
        'Open Modal',
        {
            type: 'button',
            id: 'modalBtn',
            className: 'btn btn-primary',
            "data-bs-title": "Open Modal Window",
            'data-bs-toggle': "tooltip",
            'data-bs-placement': "bottom",
            'data-bs-custom-class': "custom-tooltip"
        }, {
            click:modalWindow
        })
}
function createAlertButton() {
    createElement
    (
        'button',
        '#leftBlock',
        "Open Alert",
        {
            id: 'alertBtn',
            type: 'button',
            className: 'btn btn-danger',
            "data-bs-title": "Open ALERT",
            'data-bs-toggle': "tooltip",
            'data-bs-placement': "bottom",
            'data-bs-custom-class': "custom-tooltip-alert",
        }, {click:()=>{
            showBottomAlert(`Some information here!`,`info`);

        }})

}
function myBirthdayDate(){
    const birthday = moment('1992-01-31')
    const formattedDate = birthday.format('DD.MM.YYYY');
    createElement('p','#rightBlock',`My birthday date: ${formattedDate}`,{id:'formattedPlace'})
}
function validateDate(dateInput){
    return /^\d{4}-\d{2}-\d{2}$/g.test(dateInput)
}
function createElementsForDateInput(){
    createElement(`div`,`#rightBlock`,'',{id:`blockForInput`});
    createElement(`input`,`#blockForInput`,'',{id:'userInput',type:'text',placeholder:`Enter your birthday date (format: YYYY-MM-DD)`});
    createElement(`button`,`#rightBlock`,'Submit',{id:'submitBtn',className:'btn btn-warning',type:'button'},{click:formatDate});
    createElement(`p`,`#rightBlock`,``,{id:'outerDate'})
};
function formatDate(){
    const birthdateInput = document.getElementById(`userInput`).value;
    if (validateDate(birthdateInput)){
        const birthdate = moment(birthdateInput,`YYYY-MM-DD`,true);
        if (birthdate.isValid()) {
            const formattedDate = birthdate.format('DD.MM.YYYY');
            document.getElementById('outerDate').textContent = `Your birthday in another format: ${formattedDate}`;
            document.getElementById('userInput').value = '';
        } else {
            document.getElementById('outerDate').textContent = '';
            showBottomAlert(`Incorrect date`,'danger');
            document.getElementById('userInput').value=''
        }
    } else {
        document.getElementById('outerDate').textContent = '';
        showBottomAlert(`Incorrect date format, please enter date in YYYY-MM-DD format`,'danger');
        document.getElementById('userInput').value=''

    }

}


