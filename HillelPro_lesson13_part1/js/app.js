const users = JSON.parse(localStorage.getItem('users')) || defaultUsers;
showRows(users);

document.querySelector('#btnAdd input').addEventListener('click', showAddUserForm);

