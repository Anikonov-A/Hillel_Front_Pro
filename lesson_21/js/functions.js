function getValueFromPersonFields (){
    const personForm = document.querySelector(`#personForm`)
    return {
        name: personForm.name.value,
        lastName: personForm.lastName.value,
        age: personForm.age.value,
        eyeColor: personForm.eyeColor.value,
    };
}
function getValueFromCarFields (){
    const carForm = document.querySelector(`#carForm`)
    return {
        carBrand: carForm.carBrand.value,
        carColor: carForm.carColor.value,
        engineSize: carForm.engineSize.value,
        wheelsSize: carForm.wheelsSize.value,
    };
}


