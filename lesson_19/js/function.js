function getAndDisplayPeopleData(){
    document.getElementById('people-btn').addEventListener('click', () => {
        axios.get(urlObject.people)
            .then(people => {
                const results = people.data.results;
                results.forEach(people => {
                    document.getElementById('people-block').style.visibility = 'visible'
                    const newLi = document.createElement('li');
                    newLi.textContent = people.name;
                    newLi.setAttribute('data-bs-toggle',"modal")
                    newLi.setAttribute('data-bs-target',"#exampleModal")
                    dataBlocks.people.appendChild(newLi)
                });

                document.getElementById('people-block').addEventListener('click', (event) => {
                    if (event.target.nodeName === 'LI') {
                        const listItemText = event.target.textContent;
                        const character = results.find(person => person.name === listItemText)
                        console.log(character)
                    }
                })
            })
    })
}
function getAndDisplayVehicleData(){
    document.getElementById('vehicle-btn').addEventListener('click', () => {
        axios.get(urlObject.vehicle)
            .then(vehicles => {
                const results = vehicles.data.results;
                results.forEach(vehicle => {
                    document.getElementById('vehicle-block').style.visibility = 'visible'
                    const newLi = document.createElement('li');
                    newLi.textContent = vehicle.name;
                    dataBlocks.vehicle.appendChild(newLi)
                })
                document.getElementById('vehicle-block').addEventListener('click', (event) => {
                    if (event.target.nodeName === 'LI') {
                        const listItemText = event.target.textContent;
                        const vehicles = results.find(vehicle => vehicle.name === listItemText)
                        console.log(vehicles)
                    }
                })

            })
    })
}
function getAndDisplayPlanetsData(){
    document.getElementById('planets-btn').addEventListener('click', () => {
        axios.get(urlObject.planets)
            .then(planets => {
                const results = planets.data.results;
                results.forEach(planet => {
                    document.getElementById('planets-block').style.visibility = 'visible'
                    const newLi = document.createElement('li');
                    newLi.textContent = planet.name;
                    dataBlocks.planets.appendChild(newLi)
                })
                document.getElementById('planets-block').addEventListener('click', (event) => {
                    if (event.target.nodeName === 'LI') {
                        const listItemText = event.target.textContent;
                        const planets = results.find(planet => planet.name === listItemText)
                        console.log(planets)
                    }
                })
            })
    })
}
