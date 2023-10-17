class Person {
    constructor(name) {
        this.name = name;
    }

    showInfo() {

        const personParagraph = createElement(`div`, `.house-card`, ``,{"className":'name-block'})
        personParagraph.innerHTML = `Name: ${this.name}`

    }
}