function Car(carBrand, carColor, engineSize, wheelsSize) {
    this.carBrand = carBrand;
    this.carColor = carColor;
    this.engineSize = engineSize;
    this.wheelsSize = wheelsSize;
}

Car.prototype.assignOwner = function (person) {
    this.owner = person
}

Car.prototype.showData = function () {
    document.getElementById(`list`).innerHTML = '';
    document.getElementById(`modalTitle`).textContent = `Car`
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            const listItem = document.createElement('li');
            if (key === 'owner' && this.owner && this.owner.name) {
                listItem.textContent = `Owner: ${this.owner.name}`;
            } else {
                listItem.textContent = `${key}: ${this[key]}`;
            }
            document.getElementById(`list`).appendChild(listItem);
        }
    }
}
