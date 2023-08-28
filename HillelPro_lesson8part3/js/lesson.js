const company = {
    name: 'Boss',
    employees: [
        {
            name: 'VP of R&D',
            employees: [
                {
                    name: 'Team Lead',
                    employees: [
                        {name: 'Dev1'},
                        {name: 'Dev2'},
                        {name: 'Dev3'},
                    ]
                },
                {
                    name: 'VP of Product',
                    employees: [
                        {
                            name: 'Product Owner'
                        },
                        {
                            name: 'UI/UX Designer'
                        }
                    ]
                }
            ]
        }
    ]
}

function deepClone(person) {
    let result = {};
    if (person.employees) {
        result = {
            name: person.name,
            employees: [],
        }
        for (let i = 0; i < person.employees.length; i++) {
            result.employees.push(deepClone(person.employees[i]))
        }
        result = deepClone(person)
    }
    result = Object.assign({}, person)
    return result
}

const company2 = deepClone(company)

let sum = (a,b) =>  a + b;
sum(2,2)

let square = value => value * value;
console.log(square(5))

let f = function(){
    console.log(arguments);
}