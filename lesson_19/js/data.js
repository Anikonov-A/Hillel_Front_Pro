const domElements={
    'people':{
        "btn": document.getElementById('peopleBtn'),
        "list": document.getElementById(`peopleList`),
        "nextBtn": document.getElementById(`peopleNext`),
        "prevBtn": document.getElementById('peoplePrev'),
        "block": document.getElementById('peopleBlock'),
        "modalTitle": document.getElementById('modalTitle'),
        "modalList": document.getElementById('modalList'),
    },
    'vehicle':{
        "btn": document.getElementById('vehicleBtn'),
        "list": document.getElementById(`vehicleList`),
        "nextBtn": document.getElementById(`vehicleNext`),
        "prevBtn": document.getElementById('vehiclePrev'),
        'block': document.getElementById('vehicleBlock'),
        "modalTitle": document.getElementById('modalTitle'),
        "modalList": document.getElementById('modalList'),
    },
    'planets':{
        "btn": document.getElementById('planetsBtn'),
        "list": document.getElementById(`planetsList`),
        "nextBtn": document.getElementById(`planetsNext`),
        "prevBtn": document.getElementById('planetsPrev'),
        "block": document.getElementById('planetsBlock'),
        "modalTitle": document.getElementById('modalTitle'),
        "modalList": document.getElementById('modalList'),
    },
}
const pagesObj ={
    peoplePage:1,
    vehiclesPage:1,
    planetsPage:1,
}

const urlObject = {
    "people": `https://swapi.dev/api/people/`,
    "vehicle": "https://swapi.dev/api/vehicles/",
    "planets": "https://swapi.dev/api/planets/",
}
const dataProperties = {
    people: ['height', 'mass', 'hair_color', 'eye_color', 'birth_year', 'gender'],
    vehicles: ['model', 'manufacturer', 'cost_in_credits', 'length', 'max_atmosphering_speed', 'crew', 'passengers', 'cargo_capacity', 'consumables', 'vehicle_class'],
    planets: ['rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity', 'terrain', 'surface_water', 'population'],
}
