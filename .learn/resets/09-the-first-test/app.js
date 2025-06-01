// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
//let tasaDeConversionYen = oneEuroIs["JPY"]; // Esto te dará 156.5
//let tasaDeConversionDollar = oneEuroIS["USD"]; // esto dara 1.07
//let tasaDeConversionPound = oneEuroIs["GBP"]; //esto dara 0.87

//dollar a yenes
function dollarAYenes(dollar) =>{
    let tasaDeConversionYen = oneEuroIs["JPY"];
    let yenes = dollares * tasaDeConversionYen;
    return yenes;
};


console.log(dollarAYenes(10));