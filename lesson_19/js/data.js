const urlObject = {
    "people": "https://swapi.dev/api/people/",
    "vehicle": "https://swapi.dev/api/vehicles/",
    "planets": "https://swapi.dev/api/planets/"
}

const domElements = {
    "peopleBtn":document.getElementById('peopleBtn'),
    "vehicleBtn":document.getElementById('vehicleBtn'),
    "planetsBtn":document.getElementById('planetsBtn'),
    "peopleList": document.getElementById(`peopleList`),
    "vehicleList": document.getElementById(`vehicleList`),
    "planetsList": document.getElementById(`planetsList`),
    "modalTitle":document.getElementById('modalTitle'),
    "modalList":document.getElementById('modalList'),
    "peopleNextBtn":document.getElementById(`peopleNext`),
    "vehicleNextBtn":document.getElementById(`vehicleNext`),
    "planetsNextBtn":document.getElementById(`planetsNext`),
    "peopleBlock":document.getElementById('peopleBlock'),
    'vehicleBlock':document.getElementById('vehicleBlock'),
    "planetsBlock":document.getElementById('planetsBlock'),


}

const dataProperties = {
    peopleProperties : ['height', 'mass', 'hair_color', 'eye_color', 'birth_year', 'gender'],
    vehicleProperties : ['model', 'manufacturer', 'cost_in_credits', 'length', 'max_atmosphering_speed', 'crew', 'passengers', 'cargo_capacity', 'consumables', 'vehicle_class'],
    planetsProperties : ['rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity', 'terrain', 'surface_water', 'population'],
}