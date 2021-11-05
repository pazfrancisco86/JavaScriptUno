/* */

function areaC( num1 = 0 , num2 = 3.1416 ) {
    const resultado = (num1*num1) * num2;
    console.log(`El area del circulo es ${resultado} cm2`);
}
function gradosCF( num1 = 0 , num2= 9/5 , num3= 32 ) {
    const resultado = (num1 * num2) + num3;
    console.log(`${num1} grados C° es igual a ${resultado} grados Fahrenheit`);
}
function areaTria( num1 = 0 , num2 = 0 , num3 = 2) {
    const resultado = (num1 * num2) / num3;
    console.log(`El area del rectangulo es ${resultado} cm2`);
}

let operacion = Number(prompt(`Elije tu pasaje de unidades:
1 - Area de un circulo a partir de un radio dado en cm2
2 - Grados C° a Fahrenheit
3 - Area de un triangulo con b*h en cm2`));
if ( operacion > 3 || operacion < 1) {
    alert("Ingresa un numero entre 1 y 3");
    operacion = Number(prompt(`Elije tu pasaje de unidades:
    1 - Area de un circulo a partir de un radio dado en cm2
    2 - Grados C° a Fahrenheit
    3 - Area de un triangulo con b*h en cm2`));
}

const numero1 = Number(prompt("Ingresa valor a calcular"));
/*const numero2 = Number(prompt("Ingresa el 2do numero"));*/

switch (operacion) {
    case 1:
        areaC(numero1,);
        break;
    case 2:
        gradosCF(numero1,);
        break;
    case 3:
        const numero2 = Number(prompt("Ingresa h del triangulo"));
        areaTria(numero1, numero2);
        break;
    default:
        break;
}