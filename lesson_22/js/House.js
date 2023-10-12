class House {
    constructor(address, floors, apartments,apartCounter) {
        this.address = address;
        this.floors = floors;
        this.apartments = apartments;
        this.apartCounter = apartCounter
    }

    showInfo() {
        console.log(`
        Address: ${this.address},
        Floors: ${this.floors},
        Apartments:`)
        this.apartments.forEach(apartment => apartment.showInfo())
    }
}

