const userInput =document.getElementById(`textInput`);
const userInputValue = userInput.value;


async function getDataFromArray(){
    const randomMsg=Math.floor(Math.random()*answers.length)
    document.getElementById(`textField`).textContent = answers[randomMsg]
}
