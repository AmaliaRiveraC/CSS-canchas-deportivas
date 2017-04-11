var botonFut = document.getElementById("botonFutbol");
var botonBasket  = document.getElementById("botonBasketbol");
var botonTennis = document.getElementById("botonTennis");

botonFutbol.addEventListener("click", mostrarCanchaFutbol);
botonBasketbol.addEventListener("click", mostrarCanchaBasketbol);
botonTennis.addEventListener("click", mostrarCanchaTennis);

function mostrarCanchaFutbol() {
	document.getElementById("contenedorFutbol").style.display = "block";
}

function mostrarCanchaBasketbol() {
    document.getElementById("contenedorBasketbol").style.display = "block";
}

function mosstrarCanchaTennis() {
    document.getElementById("contenedorTennis").style.display = "block";
}
