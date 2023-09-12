function showRows(users) {
    for (let user of users) {
        showUserRow(user)
    }
}

//tagName,parentSelector,content,attributes,handlers
function showUserRow(user) {
    const container = createElement('div', '#users', '', {'data-user-id': user.id});//container

    createElement('div', container, user.id);//id element

    createElement('div', container, user.name + ' ' + user.lastName);//name element

    const actionsElement = createElement('div', container, '', {className: "actions", 'data-id': user.id});

    createElement(
        'input',
        actionsElement,
        '',
        {
            type: 'button',
            value: 'Edit',
            'data-type': 'edit',
        }, {});

    createElement(
        'input',
        actionsElement,
        '',
        {
            type: 'button',
            value: 'Remove',
            'data-type': 'remove',

        }, {click: handleDeleteUser});

    createElement('input',
        actionsElement,
        '',
        {
            type: 'button',
            value: 'View',
            'data-type': 'view'
        }, {click: showUserCard})
}

function showAddUserForm() {
    const parentSelector = '#form form';

    createElement('input', parentSelector, '', {name: 'login', type: 'text', placeholder: 'Enter login',})
    createElement('input', parentSelector, '', {name: 'name', type: 'text', placeholder: 'Enter name',})
    createElement('input', parentSelector, '', {name: 'lastName', type: 'text', placeholder: 'Enter last name',})
    createElement('input', parentSelector, '', {name: 'email', type: 'text', placeholder: 'Enter email',})

    createElement('input', parentSelector, '', {type: "button", value: 'Save'}, {click: handleSaveUser})
}

function handleSaveUser() {
    const formElements = document.forms[0].elements;

    const login = formElements.login.value;
    const name = formElements.name.value;
    const lastName = formElements.lastName.value;
    const email = formElements.email.value;

    const user = {
        login,
        name,
        lastName,
        email,
        id: this.id = users.length + 1,
    }


    const isValid = validate(user);
    if (!(isValid.login && isValid.name && isValid.lastName && isValid.email)) {
        showError(isValid)
    } else {
        saveUser(user)
        cleanElement('#form form')

    }
}

function validate(user) {
    return {
        login: !(user.login === '' || user.login === ' '),
        name: !(user.name === '' || user.name === ' ' || !isNaN(user.name)),
        lastName: !(user.lastName === '' || user.lastName === ' ' || !isNaN(user.lastName)),
        email: !(user.email === '' || user.email.length === 1) && user.email.includes("@"),
    };

}

function saveUser(newUser) {
    users.push(newUser);
    updateStorage();
    showUserRow(newUser)
}

function updateStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}

function handleDeleteUser(event) {
    const userId = getUserId(event)
    deleteUserById(userId)
}

function deleteUserById(id) {
    const indexToRemove = users.findIndex(user => user.id == id);
    users.splice(indexToRemove, 1);

    removeElement(`div[data-user-id="${id}"]`)

    updateStorage();
}

function cleanElement(element) {
    if (typeof element === 'string') {
        document.querySelector(element).innerHTML = '';
    } else {
        element.innerHTML = '';
    }

}

function showError(isValid) {
    for (let field in isValid) {
        const inputElement = document.querySelector(`[name='${field}']`)
        const fieldValue = isValid[field];
        if (!fieldValue) {
            addErrorInInput(inputElement, 'error', `please enter the correct value`)
        } else {
            deleteErrorInInput(inputElement, 'error')
        }
    }
}

function addErrorInInput(element, className, errMsg) {
    element.classList.add(className);
    element.placeholder = errMsg
}

function deleteErrorInInput(element, classname) {
    element.classList.remove(classname)
}

function getUserId(event) {
    return event.target.parentNode.getAttribute('data-id');
}

function showUserCard(event) {
    const container = document.getElementById('users');
    let userArticle = document.getElementById('userCard')

    if(!userArticle){
        userArticle = createElement('div', container, ``, {id: 'userCard','className':'user-item'});
    }

    displayInfoFromUser(event,userArticle)


}
function displayInfoFromUser(event,element){
    const chosenUserId = getUserId(event)
    for (let user of users){
        if (user.id == chosenUserId){
            element.innerHTML=`<h2>User INFO</h2>
                                   <p>${user.login}</p>
                                   <p>${user.name}</p>
                                   <p>${user.lastName}</p>
                                   <p>${user.email}</p> `

        }

    }
}