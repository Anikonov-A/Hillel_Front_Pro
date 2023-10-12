class Apartment{
    constructor(number,roomsAmount,people,peopleCounter) {
        this.number = number;
        this.roomsAmount = roomsAmount;
        this.people =people;
        this.peopleCounter=peopleCounter
    }


    showInfo(){
        console.log(`
        Number: ${this.number},
        Rooms: ${this.roomsAmount},
        People: `);
        this.people.forEach(person=>person.showInfo())
    }
}

