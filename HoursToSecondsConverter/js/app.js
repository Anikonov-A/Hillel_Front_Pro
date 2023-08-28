let userHours = prompt('Please enter the number of hours');
let minutesInAHour = 60;
let secondsInAMinute = 60;
let secondsInAHour = userHours * (minutesInAHour * secondsInAMinute);
alert(`The number of seconds is ${secondsInAHour}`);