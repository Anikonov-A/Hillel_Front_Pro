class Person {
    constructor(name,lastName,age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;

    }

    showInfo(){
        console.log(`
        Name: ${this.name},
        LastName:${this.lastName},
        Age:${this.age}
        `)
    }
}
