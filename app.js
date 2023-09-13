const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
console.log(fromEuroToDollar(150))


const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 127.9;
    // retornamos el valor
    return valueInYen;
}
console.log(fromDollarToYen(250))


const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = valueInYen * 0.8;
    // retornamos el valor
    return valueInPound;
}
console.log(fromYenToPound(300))


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }


