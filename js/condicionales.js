const user = prompt("Ingresa nombre de usuario");
const pass = prompt("Ingresa contraseña");

const adminValido = user == "Scaloni" && pass == "2022";
const usuarioValido = (user == "roberto" && pass == "1986") || (user == "homero" && pass == "1960") || (user == "marge" && pass == "1007");

if (adminValido) {
    console.log("Bienvenido crack!");
}   else if (usuarioValido) {
        console.log("Bienvenido " + user);
}   else {
        console.log("Hasta aca llegaste maestro!");
}