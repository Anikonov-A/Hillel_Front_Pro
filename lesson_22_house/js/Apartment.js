class Apartment {
    constructor(apartmentNumber, numberOfRooms) {
        this.apartmentNumber = apartmentNumber;
        this.numberOfRooms = numberOfRooms;
        this.residents = [];
    }

    // addResident(resident,index) {
    //     this.residents[index].push(resident);
    // }
    showInfo() {

        const apartmentParagraph = createElement(`div`, '.house-card', ``, {'className': ''})
        apartmentParagraph.innerHTML = `
         <ul>
          <li>Apartment number# ${this.apartmentNumber}</li>
          <li>Number of rooms: ${this.numberOfRooms}</li>
          <li>Residents: </li>
         </ul>`
        this.residents.forEach(person => person.showInfo())
    }
}
