// const peopleUrl = "https://swapi.dev/api/people/"
// const vehicleUrl = "https://swapi.dev/api/vehicles/"
// const planetsUrl = "https://swapi.dev/api/planets/"
const urlObject = {
    "people": "https://swapi.dev/api/people/",
    "vehicle": "https://swapi.dev/api/vehicles/",
    "planets": "https://swapi.dev/api/planets/"
}
const dataBlocks = {
    "people": document.getElementById(`people-list`),
    "vehicle": document.getElementById(`vehicle-list`),
    "planets": document.getElementById(`planets-list`),
}

document.getElementById('people-btn').addEventListener('click', () => {
    axios.get(urlObject.people)
        .then(people => {
            return people.data.results;
        }).then(results=> {
        results.forEach(people => {
            document.getElementById('people-block').style.visibility = 'visible'
            const newLi = document.createElement('li');
            newLi.textContent = people.name;
            dataBlocks.people.appendChild(newLi)
        })
    })
})
document.getElementById('vehicle-btn').addEventListener('click', () => {
    axios.get(urlObject.vehicle)
        .then(vehicles => {
        return vehicles.data.results;
    }).then(vehicles => {
        vehicles.forEach(vehicle => {
            document.getElementById('vehicle-block').style.visibility = 'visible'
            const newLi = document.createElement('li');
            newLi.textContent = vehicle.name;
            dataBlocks.vehicle.appendChild(newLi)
        })
    })

})
document.getElementById('planets-btn').addEventListener('click', () => {
    axios.get(urlObject.planets)
        .then(planets => {
        return planets.data.results;
    }).then(planets => {
        planets.forEach(planet => {
            document.getElementById('planets-block').style.visibility = 'visible'
            const newLi = document.createElement('li');
            newLi.textContent = planet.name;
            dataBlocks.planets.appendChild(newLi)
        })
    })
})