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
const myModal = document.getElementById('myModal')

getAndDisplayPeopleData();
getAndDisplayVehicleData();
getAndDisplayPlanetsData();
