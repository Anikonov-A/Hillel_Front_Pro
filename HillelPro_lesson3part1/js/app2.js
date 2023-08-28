//Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?

let kilometers = parseInt(prompt("enter the number of kilometers here"));
let feet = parseInt(prompt("enter the number of feet here"));
let feetToKilometers = (feet * 0.305)/1000;
console.log(feetToKilometers)
if (kilometers < feetToKilometers) {
    console.log("Distance in feet is bigger");
} else {
    console.log("Distance in kilometers is bigger");
};