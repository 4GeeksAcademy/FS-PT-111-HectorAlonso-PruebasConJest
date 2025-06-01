// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
//let tasaDeConversionYen = oneEuroIs["JPY"]; // Esto te dará 156.5
//let tasaDeConversionDollar = oneEuroIS["USD"]; // esto dara 1.07
//let tasaDeConversionPound = oneEuroIs["GBP"]; //esto dara 0.87

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
/*
console.log(euroADollar(3.5));

function dollarAYen (dollar){
    let convertirAYen = oneEuroIs["JPY"] / oneEuroIs["USD"]
        let calcularDollarYen = dollar * convertirAYen;
        return calcularDollarYen;
}
console.log(dollarAYen(1));

function yenAPund (yen){
    let convertirAPound = oneEuroIs["GBP"] / oneEuroIs["JPY"];
        let calcularPound = yen * convertirAPound
            return calcularPound;
}
console.log(yenAPund(1));*/

