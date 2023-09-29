let userYearBorn = prompt("What year were you born?");
let userCity = prompt("Where do you live?");
let userSport = prompt("What's your favorite sport? ");

let finalMessage = "";
let currentYear = 2023;
let userAge = currentYear - userYearBorn;

if (userYearBorn) {
    finalMessage += `You're ${userAge} years old `;
} else {
    finalMessage += `Sorry you didn't want to enter your age`;
}

if (userCity.toLowerCase() === 'kyiv') {
    finalMessage += `\nYou live in the capital of Ukraine`;
} else if (userCity.toLowerCase() === 'london') {
    finalMessage += `\nYou live in the capital of the UK`;
} else if (userCity.toLowerCase() === 'washington') {
    finalMessage += `\nYou live in the capital of the USA`;
} else if (userCity) {
    finalMessage += `\nYou live in ${userCity}`;
}else {
    finalMessage += `\nSorry you didn't want to enter your city`;
}

if (userSport.toLowerCase() === 'football') {
    finalMessage += `\nCool!You want to be like Messi.`;
} else if (userSport.toLowerCase() === 'hockey') {
    finalMessage += `\nCool!You want to be like Gretzky`;
}else if (userSport.toLowerCase() ==='tennis'){
    finalMessage+=`\nCool!You want to be like Federer`
}else if(userSport){
    finalMessage+=`\nCool!You like to play ${userSport} !`
} else{
    finalMessage += `\nSorry you didn't want to enter your favorite sports`;
}
alert(finalMessage);

