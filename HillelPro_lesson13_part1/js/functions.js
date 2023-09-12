// Створити CRUD-додаток (Create, Read, Update, Delete):
//
// Виводиться список користувачів із кнопками “Edit”, “Remove”, “View” біля кожного користувача (use data-id attributes або event delegation) //done
// список користувачів отримувати з js-файлу (масив об'єктів / використовувати функції-конструктори – за бажанням) //done
//
// При натисканні на кнопку “View” відкриваються дані користувача у блоці під списком //done
// При натисканні на кнопку “Edit” з'являється можливість редагувати дані в блоці під списком. Дані зберігаються при натисканні на кнопку “Save” та оновлюють дані у списку
// При натисканні на кнопку “Remove” користувач видаляється зі списку//done
// Обов'язково підтвердження видалення (для уникнення видалення помилково)//done
// Реалізувати можливість додавання нових користувачів//done
// Бажано перевикористовувати форму редагування
// При додаванні користувач з'являється у списку//done
// Після перезавантаження сторінки всі зміни повинні зберігатись (використовувати localStorage)//done
//



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
        }, {click:editUserInformation});

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
function editUserInformation(event){
   const userId = getUserId(event);
   const user = getUserById(userId);
   showAddUserForm(user);
}
function getUserById(userId) {
    for (let user of users) {
        if (user.id == userId) {
            return user;
        }
    }
}
function showAddUserForm(user) {
    const parentSelector = '#form form';
    const existingForm = document.querySelector(`#firstInput`);

    if (!existingForm) {
        createElement('input', parentSelector, '', {name: 'login', type: 'text', placeholder: 'Enter login', id: 'firstInput',value:user.login || ''});
        createElement('input', parentSelector, '', {name: 'name', type: 'text', placeholder: 'Enter name',value:user.name || ''});
        createElement('input', parentSelector, '', {name: 'lastName', type: 'text', placeholder: 'Enter last name',value:user.lastName ||''});
        createElement('input', parentSelector, '', {name: 'email', type: 'text', placeholder: 'Enter email',value:user.email||''});

        createElement('input', parentSelector, '', {type: "button", value: 'Save'}, {click: handleSaveUser});

    }

}

function handleSaveUser() {
    const formElements = document.forms[0].elements;


    const login = formElements.login.value;
    const name = formElements.name.value;
    const lastName = formElements.lastName.value;
    const email = formElements.email.value;
    const randomId = Date.now().toString().slice(-2);


    const user = {

        id:randomId,   // id: this.id = users.length+1 получались дубли когда удалял элемент из середины следующий добавленый дублировал предыдущий.
        login,
        name,
        lastName,
        email,

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
    confirmation(userId)
}

function confirmation(userId) {
    let confirmationBlock =document.getElementById('confirmationBlock');
    if (!confirmationBlock) {
        confirmationBlock = createElement('div', `div[data-user-id="${userId}"]`, `Are you sure you want to delete this user?`, {className: 'confirmation-block',id:'confirmationBlock'});
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
                                  <li>User name: ${user.name}</li>
                                  <li>User last name: ${user.lastName}</li>
                                  <li>User email: ${user.email}</li>
                               
                                </ul>
                               `
        }

    }
    setTimeout(() => {
        element.remove();
    }, 3000);

}