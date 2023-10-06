function getValueFromPersonFields (){
    const personForm = document.querySelector(`#personForm`)
    const personValue ={
        name:personForm.name.value,
        lastName:personForm.lastName.value,
        age:personForm.age.value,
        eyeColor:personForm.eyeColor.value,
    }
    return personValue;
}

function getValueFromCarFields (){
    const carForm = document.querySelector(`#carForm`)
    const carValue ={
        carBrand:carForm.carBrand.value,
        carColor:carForm.carColor.value,
        engineSize:carForm.engineSize.value,
        wheelsSize:carForm.wheelsSize.value,
    }
    return carValue;
}

