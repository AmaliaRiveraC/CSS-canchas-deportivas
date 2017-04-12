//manda llamar por clase los 3 botones y las tres canchas para poder cambiar de una a otra 
var boton = document.getElementsByClassName("boton"); 
var canchas = document.getElementsByClassName("canchas");

//Le agrega a cada botón un evento click que se encargara de ejecutar las funciones que muestran las canchas
boton[0].addEventListener("click", mostrarCanchaFutbol);
boton[1].addEventListener("click", mostrarCanchaBasketbol);
boton[2].addEventListener("click", mostrarCanchaTennis);

//Esta función se encarga de mostrar la cancha con índice cero (la de futbol) y a la vez oculta las otras dos
function mostrarCanchaFutbol() {
	canchas[0].style.display = "block";
    canchas[1].style.display = "none";
    canchas[2].style.display = "none";
}

//Esta función hace lo mismo que la de arriba pero para la cancha de basketbol
function mostrarCanchaBasketbol() {
    canchas[1].style.display = "block";
    canchas[0].style.display = "none";
    canchas[2].style.display = "none";
}

//Esta función muestra la cancha de tennis y oculta las demás
function mostrarCanchaTennis() {
    canchas[2].style.display = "block";
    canchas[0].style.display = "none";
    canchas[1].style.display = "none";
}
