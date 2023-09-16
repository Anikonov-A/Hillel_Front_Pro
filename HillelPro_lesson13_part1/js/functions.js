function showRows(users) {
    for (let user of users) {
        showUserRow(user)
    }
}

function showUserRow(user) {
    const container = createElement('div', '#users', '', {'data-user-id': user.id});//container

    createElement('div', container, user.id);//id element

    createElement('div', container, user.name + ' ' + user.lastName);//name element

    const actionsElement = createElement('div', container, '', {className: "actions", 'data-id': user.id});

    createElement('input', actionsElement, '', {type: 'button', value: 'Edit', 'data-type': 'edit',}, {click: editUserInformation});
    createElement('input', actionsElement, '', {type: 'button', value: 'Remove', 'data-type': 'remove',}, {click: handleDeleteUser});
    createElement('input', actionsElement, '', {type: 'button', value: 'View', 'data-type': 'view'}, {click: showUserCard})
}

function editUserInformation(event) {
    const userId = getUserId(event);
    const chosenUser = getUserById(userId);
    showAddUserForm(chosenUser);
}

function getUserById(userId) {
    for (let user of users) {
        if (user.id == userId) {
            return user;
        }
    }
}

function showAddUserForm(chosenUser) {
    const parentSelector = '#form form';
    const myForm = document.querySelector(parentSelector);
    while (myForm.firstChild) {
        myForm.removeChild(myForm.firstChild);
    }
    createElement('input',parentSelector, '', {name: 'login', type: 'text', placeholder: 'Enter login min 3 letters can include digits or _ ', id: 'firstInput', value: chosenUser.login || ''});
    createElement('input',parentSelector, '', {name:'password',type:'text',placeholder:'Enter password min 4 max 16(letters/digits)',value: chosenUser.password || ''});
    createElement('input',parentSelector, '', {name: 'name', type: 'text', placeholder: 'Enter name min 3 letters', value: chosenUser.name || ''});
    createElement('input',parentSelector, '', {name: 'lastName', type: 'text', placeholder: 'Enter last name min 3 letters', value: chosenUser.lastName || ''});
    createElement('input',parentSelector, '',  {name:'age',type:'text',placeholder:'Enter your age,you must be over 18',value:chosenUser.age || ''});
    createElement('input',parentSelector, '', {name: 'email', type: 'text', placeholder: 'Enter email', value: chosenUser.email || ''});
    createElement('input',parentSelector,'',{name:'phone',type:'text',placeholder:'Enter your Phone number starts with +380',value:chosenUser.phone || ''})
    createElement('input',parentSelector,'',{name:'card',type:'input',placeholder:`Enter your card every 4 digits separated by dash(-) `,value:chosenUser.card || ''});

    createElement('input',parentSelector, '', {type: "button", value: 'Save'}, {click: () => handleSaveUser(chosenUser)});

}

function updateUsersList() {
    const userList = document.querySelector('#users');
    userList.innerHTML = '';
    for (let user of users) {
        showUserRow(user)
    }
}

function handleSaveUser(chosenUser) {
    const formElements = document.forms[0].elements;
    const login = formElements.login.value;
    const password = formElements.password.value;
    const name = formElements.name.value;
    const lastName = formElements.lastName.value;
    const age = formElements.age.value;
    const email = formElements.email.value;
    const phone = formElements.phone.value;
    const card = formElements.card.value;

    if (chosenUser && chosenUser.id) {
        chosenUser.login = login;
        chosenUser.password = password
        chosenUser.name = name;
        chosenUser.lastName = lastName;
        chosenUser.age = age;
        chosenUser.email = email;
        chosenUser.phone = phone;
        chosenUser.card = card;
        const editValid = validate(chosenUser)
        if (!(editValid.login && editValid.name && editValid.lastName && editValid.email && editValid.password && editValid.age && editValid.phone && editValid.card)) {
            showError(editValid)
        } else {
            updateStorage();
            cleanElement('#form form');
            updateUsersList();
        }

    } else {
        const randomId = Date.now().toString().slice(-2);
        const user = {
            id: randomId,
            login,
            password,
            name,
            lastName,
            age,
            email,
            phone,
            card,
        };

        const isValid = validate(user);
        if (!(isValid.login && isValid.name && isValid.lastName && isValid.email && isValid.password && isValid.age && isValid.phone && isValid.card)) {
            showError(isValid);
        } else {
            saveUser(user);
            cleanElement('#form form');
        }
    }
}

function cardValid(card){
    return /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/g.test(card);//(\d{4})\-(\d{4})\-(\d{4})\-(\d{4})
}
function passwordValid(password){
    return /[0-9A-z]{4,16}/g.test(password);//+
}
function phoneValid(phone){
    return /^\+380[0-9]{9}$/g.test(phone);//+
}
function loginValid(login){
    return /^[a-zA-Z0-9_]{3,16}$/g.test(login); // /^[a-z]{3,}\d+$ letters with numbers in the end// ||^[a-z]{3,}$ only letters
}
function nameAndLastNameValid(name){
    return /^[a-z]{3,}$/gi.test(name);//+
}
function emailValid(email){
    return /^[a-z0-9_]+@[a-z]+\.[a-z]{2,}$/gi.test(email); // ^[a-z]{3,}[0-9]{1,}@[a-z]{2,}\.[a-z]{2,}$||/\w+@\w\.[a-z]{2,}
}
function ageValid(age){
    return /^(1[89]|[2-9]\d|\d{3})$/g.test(age);//+
}

function validate(user) {
    return {
        login:loginValid(user.login),
        password:passwordValid(user.password),
        name: nameAndLastNameValid(user.name),
        lastName:nameAndLastNameValid(user.lastName),
        age:ageValid(user.age),
        email:emailValid(user.email),
        phone:phoneValid(user.phone),
        card:cardValid(user.card),
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
    confirmation(userId)
}

function confirmation(userId) {
    let confirmationBlock = document.getElementById('confirmationBlock');
    if (confirmationBlock) {
        removeElement(confirmationBlock)
    }
    confirmationBlock = createElement('div', `div[data-user-id="${userId}"]`, `Are you sure you want to delete this user?`, {
        className: 'confirmation-block',
        id: 'confirmationBlock'
    });
    createElement('input', confirmationBlock, '', {type: 'button', value: 'YES'}, {
        click: () => {
            removeElement(confirmationBlock);
            deleteUserById(userId);
        }
    })
    createElement('input', confirmationBlock, '', {type: 'button', value: 'NO'}, {
        click: () => {
            removeElement(confirmationBlock);
        }
    })

}

function deleteUserById(id) {
    const indexToRemove = users.findIndex(user => user.id == id);
    users.splice(indexToRemove, 1);

    removeElement(`div[data-user-id="${id}"]`);

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
    const errors = {
        login: `add the correct login min 3 letters can include digits or _ `,
        password:`enter the correct password from 4 to 16 characters (digits/letters)`,
        name: `please enter the correct name min three letters`,
        lastName: `please enter the correct lastName min three letters`,
        age:`you must be over 18 years old`,
        email: `please enter the correct email`,
        phone:`number should be in format +380 plus 9 digits`,
        card:`add 16 digit card, every four 4 digits separated by a dash (-)`,
    }
    for (let field in isValid) {
        const inputElement = document.querySelector(`[name='${field}']`)
        const fieldValue = isValid[field];

        if (!fieldValue) {
            const errorMessage = errors[field]
            addErrorInInput(inputElement, 'error', `${errorMessage}`)
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

    if (!userArticle) {
        userArticle = createElement('article', container, ``, {id: 'userCard', 'className': 'user-item'});
    }

    displayInfoFromUser(event, userArticle)


}

function displayInfoFromUser(event, element) {
    const chosenUserId = getUserId(event)
    for (let user of users) {
        if (user.id == chosenUserId) {
            element.innerHTML = `<p>User INFO</p>
                                <ul>
                                  <li>User login: ${user.login}</li>
                                  <li>User password: ${user.password}</li>
                                  <li>User name: ${user.name}</li>
                                  <li>User last name: ${user.lastName}</li>
                                  <li>User age: ${user.age}</li>
                                  <li>User email: ${user.email}</li>
                                  <li>User phone: ${user.phone}</li>
                                  <li>User card: ${user.card }</li>
                                </ul>
                               `
        }
    }
    setTimeout(() => {
        element.remove();
    }, 5000);

}