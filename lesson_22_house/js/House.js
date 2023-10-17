class House {
    constructor(address, numberOfApartments) {
        this.address = address;
        this.numberOfApartments = numberOfApartments;
        this.apartments = [];
    }

    addApartment(apartment) {
        this.apartments.push(apartment);
    }
    showInfo() {

        const houseCard =document.querySelector(`.house-card`)
        houseCard.classList.remove(`d-none`)

        houseCard.innerHTML =`
        <h2>House info: </h2>
        <ul>
          <li>Address: ${this.address}</li>
          <li>Number of apartments: ${this.numberOfApartments}</li>
          <li>Apartments:</li>
        </ul>
        `
        this.apartments.forEach(apartment => apartment.showInfo())
    }
}
