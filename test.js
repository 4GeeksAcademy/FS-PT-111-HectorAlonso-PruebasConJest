test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

//testa para la funcion dolar a yen
test ("dollarAYen", () =>{
    const { dollarAYen } = require('./app.js');
    //como se deberia usar
    const yen = dollarAYen(5);

    //esto deberia ser (0.87 / 156.5 * 5 = 731.31)
    const expectativa = 146.26168224299064 * 5;
    // Hago mi comparación (la prueba)
    expect(dollarAYen(5)).toBe(731.3084112149533); // 1 dolar son 146.26 yenes, entonces 5 dolares deberían ser = (146.26168224299064 * 5)
}); 

//testa para la funcion dolar a yen
test ("yenAPund ", () =>{
    const { yenAPund  } = require('./app.js');
    //como se deberia usar
    const pound = yenAPund (1000);
    //esto deberia ser (156.5 / 1.07 * 1000 = 5.559105431309904)
    const expectativa = 0.05559105431309905 * 1000;
    // Hago mi comparación (la prueba)
    expect(yenAPund (1000)).toBe(5.559105431309904); // si 1 yen, son 0.05559105431309905 entonces 1000 yenes deberian ser = (0.05559105431309905 * 1000)
});
