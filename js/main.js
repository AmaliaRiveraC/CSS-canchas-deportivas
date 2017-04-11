var botonFut = document.getElementById("botonFutbol");
var botonBasket  = document.getElementById("botonBasketbol");
var botonTennis = document.getElementById("botonTennis");
var canchaFutbol = document.getElementById("contenedorFutbol");
//var canchaBasketbol = document.getElementById("contenedorBasketbol");
var canchaTennis = document.getElementById("contenedorTennis");

botonFutbol.addEventListener("click", mostrarCanchaFutbol);
botonBasketbol.addEventListener("click", mostrarCanchaBasketbol);
botonTennis.addEventListener("click", mostrarCanchaTennis);

function mostrarCanchaFutbol() {
	canchaFutbol.style.display = "block";
    //document.getElementById("contenedorBasketbol").style.display = "none";
    canchaTennis.style.display = "none";
}

function mostrarCanchaBasketbol() {
    /*canchaBasketbol.style.display = "block";
    canchaFutbol.style.display = "none";
    canchaTennis.style.display = "none";*/
    alert("Hola css")
}

function mostrarCanchaTennis() {
    canchaTennis.style.display = "block";
    //document.getElementById("contenedorBasketbol").style.display = "none";
    canchaFutbol.style.display = "none";
}
