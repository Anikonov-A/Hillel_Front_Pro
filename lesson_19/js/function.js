let currentPeoplePage= 1;
let currentVehiclesPage= 1;
let currentPlanetsPage= 1;


function getAndDisplayData(button,nextBtn,prevBtn,currentPage,callback) {
    button.addEventListener('click', () => {
        callback(currentPage);
    });
    nextBtn.addEventListener('click', () => {
        currentPage++;
        callback(currentPage)
    });
    prevBtn.addEventListener('click', () => {
        currentPage--;
        callback(currentPage);
    });
}
// function getAndDisplayData() {
//     const {peoplePrevBtn, peopleNextBtn, peopleBtn, vehiclePrevBtn, vehicleNextBtn, vehicleBtn, planetsPrevBtn, planetsNextBtn, planetsBtn} = domElements;
//
//     peopleBtn.addEventListener('click', () => {
//         getAndDisplayPeopleData(currentPeoplePage);
//     });
//     peopleNextBtn.addEventListener('click', () => {
//         currentPeoplePage++;
//         getAndDisplayPeopleData(currentPeoplePage)
//     });
//     peoplePrevBtn.addEventListener('click', () => {
//         currentPeoplePage--;
//         getAndDisplayPeopleData(currentPeoplePage);
//     });
//     vehicleBtn.addEventListener('click', () => {
//         getAndDisplayVehicleData(currentVehiclesPage);
//     });
//     vehicleNextBtn.addEventListener('click', () => {
//         currentVehiclesPage++;
//         getAndDisplayVehicleData(currentVehiclesPage);
//     });
//     vehiclePrevBtn.addEventListener('click', () => {
//         currentVehiclesPage--;
//         getAndDisplayVehicleData(currentVehiclesPage)
//     });
//     planetsBtn.addEventListener('click', () => {
//         getAndDisplayPlanetsData(currentPlanetsPage)
//     });
//     planetsNextBtn.addEventListener('click',()=>{
//         currentPlanetsPage++;
//         getAndDisplayPlanetsData(currentPlanetsPage)
//     });
//     planetsPrevBtn.addEventListener('click',()=>{
//         currentPlanetsPage--;
//         getAndDisplayPlanetsData(currentPlanetsPage);
//     });
// }

function getAndDisplayPeopleData(currentPage) {
    const {peopleList, peopleNextBtn, peoplePrevBtn, peopleBlock, modalTitle, modalList} = domElements;
    axios.get(urlObject.people + `?page=${currentPage}`)
        .then(people => {
            const results = people.data.results;
            peopleList.innerHTML = '';
            people.data.next !== null ? peopleNextBtn.style.visibility = 'visible' : peopleNextBtn.style.visibility = 'hidden';
            people.data.previous !== null ? peoplePrevBtn.style.visibility = 'visible' : peoplePrevBtn.style.visibility = 'hidden';

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
}

function getAndDisplayVehicleData(currentPage) {
    const {vehicleList, vehicleNextBtn, vehiclePrevBtn, vehicleBlock, modalTitle, modalList} = domElements;
    axios.get(urlObject.vehicle + `?page=${currentPage}`)
        .then(vehicles => {
            const results = vehicles.data.results;
            vehicleList.innerHTML = '';
            vehicles.data.next !== null ? vehicleNextBtn.style.visibility = 'visible' : vehicleNextBtn.style.visibility = 'hidden';
            vehicles.data.previous !== null ? vehiclePrevBtn.style.visibility = 'visible' : vehiclePrevBtn.style.visibility = 'hidden';
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

}

function getAndDisplayPlanetsData(currentPage) {
    const { planetsList, planetsNextBtn,planetsPrevBtn, planetsBlock, modalTitle, modalList} = domElements
    axios.get(urlObject.planets + `?page=${currentPage}`)
        .then(planets => {
            const results = planets.data.results;
            planetsList.innerHTML = '';
            planets.data.next !== null ? planetsNextBtn.style.visibility = 'visible': planetsNextBtn.style.visibility = 'hidden';
            planets.data.previous !== null ? planetsPrevBtn.style.visibility = 'visible': planetsPrevBtn.style.visibility = 'hidden';

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
                    dataProperties.planetsProperties.forEach(property => {
                        createElement(`li`, '#modalList', `${property}: ${planets[property]}`);
                    })
                }
            })
        })
}
