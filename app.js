// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    if(isNaN(valueInEuro) || valueInEuro < 0){
        return "no es un Nº valido"
    }
        // Convertimos el valor a dólares
        let valueInDollar = valueInEuro * 1.07;
        // Retornamos el valor en dólares
            return valueInDollar;
}

function dollarAYen (dollar){
    if(isNaN(dollar) || dollar < 0){
        return "no es un Nº valido"
    }
    let convertirAYen = oneEuroIs["JPY"] / oneEuroIs["USD"]
        let calcularDollarYen = dollar * convertirAYen;
        return calcularDollarYen;
}
console.log(dollarAYen(5));

function yenAPund (yen){
    if(isNaN(yen) || yen < 0){
        return "no es un Nº valido"
    }
    let convertirAPound = oneEuroIs["GBP"] / oneEuroIs["JPY"];
        let calcularPound = yen * convertirAPound
            return calcularPound;
}
console.log(yenAPund(1000));

// Exportar solo la función fromEuroToDollar
module.exports = { fromEuroToDollar, dollarAYen, yenAPund}
