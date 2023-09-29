//Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

let exchangeRate = 40;

for (let i = 10; i <= 100; i += 10) {
    let uah = i * exchangeRate;
    console.log(`${i} dollars = ${uah} uah`);
}
