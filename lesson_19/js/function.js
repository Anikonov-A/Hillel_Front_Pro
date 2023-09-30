function getAndDisplayPeopleData() {
    const {peopleBtn, peopleList, peopleNextBtn, peopleBlock, modalTitle, modalList} = domElements;
    peopleBtn.addEventListener('click', () => {
        axios.get(urlObject.people)
            .then(people => {
                const results = people.data.results;
                peopleList.innerHTML = '';
                if (people.data.next !== null) {
                    peopleNextBtn.style.visibility = 'visible'
                }
                results.forEach(people => {
                    peopleBlock.style.visibility = 'visible'
                    createElement(`li`, '#peopleList', people.name, {
                        'data-bs-toggle': "modal",
                        'data-bs-target': "#myModal"
                    })
                });
                peopleBlock.addEventListener('click', (event) => {
                    if (event.target.nodeName === 'LI') {
                        const listItemText = event.target.textContent;
                        const character = results.find(person => person.name === listItemText);

                        modalTitle.textContent = character.name;
                        modalList.innerHTML = '';
                        dataProperties.peopleProperties.forEach(property => {
                            createElement(`li`, '#modalList', `${property}: ${character[property]}`);
                        })
                    }
                })
            })
    })
}

function getAndDisplayVehicleData() {
    const {vehicleBtn, vehicleList, vehicleNextBtn, vehicleBlock, modalTitle, modalList} = domElements;
    vehicleBtn.addEventListener('click', () => {
        axios.get(urlObject.vehicle)
            .then(vehicles => {
                const results = vehicles.data.results;
                vehicleList.innerHTML = '';
                if (vehicles.data.next !== null) {
                    vehicleNextBtn.style.visibility = 'visible'
                }
                results.forEach(vehicle => {
                    vehicleBlock.style.visibility = 'visible'
                    createElement(`li`, '#vehicleList', vehicle.name, {
                        'data-bs-toggle': "modal",
                        'data-bs-target': "#myModal"
                    });
                })
                vehicleBlock.addEventListener('click', (event) => {
                    if (event.target.nodeName === 'LI') {
                        const listItemText = event.target.textContent;
                        const vehicles = results.find(vehicle => vehicle.name === listItemText);

                        modalTitle.textContent = vehicles.name;
                        modalList.innerHTML = '';
                        dataProperties.vehicleProperties.forEach(property => {
                            createElement(`li`, '#modalList', `${property}: ${vehicles[property]}`);
                        })
                    }
                })
            })
    })
}

function getAndDisplayPlanetsData() {
    const {planetsBtn, planetsList, planetsNextBtn, planetsBlock, modalTitle, modalList} = domElements
    planetsBtn.addEventListener('click', () => {
        axios.get(urlObject.planets)
            .then(planets => {
                const results = planets.data.results;
                planetsList.innerHTML = '';
                if (planets.data.next !== null) {
                    planetsNextBtn.style.visibility = 'visible';
                }
                results.forEach(planet => {
                    planetsBlock.style.visibility = 'visible'
                    createElement(`li`, '#planetsList', planet.name, {
                        'data-bs-toggle': "modal",
                        'data-bs-target': "#myModal"
                    });
                })
                document.getElementById('planetsBlock').addEventListener('click', (event) => {
                    if (event.target.nodeName === 'LI') {
                        const listItemText = event.target.textContent;
                        const planets = results.find(planet => planet.name === listItemText)

                        modalTitle.textContent = planets.name;
                        modalList.innerHTML = '';
                        planetsProperties.forEach(property => {
                            createElement(`li`, '#modalList', `${property}: ${planets[property]}`);
                        })
                    }
                })
            })
    })
}
