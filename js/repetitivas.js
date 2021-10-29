let userNumber = Number(prompt("Ingrese un numero valido en km/h"));

while ( userNumber < 120 || userNumber > 9999 ) {

    if ( userNumber < 0) {
    alert("Numeros negativos incorrectos");
    userNumber = Number(prompt("Ingrese un numero valido en km/h"));
    continue;
}
    alert("Los rafagas estan dentro de los parametros normales de viento");
    userNumber = Number(prompt("Ingrese un numero valido en km/h"));

}

alert("Busca refugio! Las rafagas de viento son muy altas!")