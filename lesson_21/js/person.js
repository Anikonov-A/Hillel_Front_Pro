function Person(name, lastName, age, eyeColor) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
}


Person.prototype.showData = function () {
    document.getElementById(`list`).innerHTML = '';
    document.getElementById(`modalTitle`).textContent = `Person`
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            const listItem = document.createElement('li');
            listItem.textContent = `${key}: ${this[key]}`;
            document.getElementById(`list`).appendChild(listItem);
        }
    }

}

