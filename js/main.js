'use strict';

const btnMenos = document.getElementById('btn-menos');
const btnMas = document.getElementById('btn-mas');
const inputNumero = document.getElementById('contador');
const btnAgregar = document.getElementById('btn-agregar');
const inputCant = document.getElementById('input-cant');
let contador = 0;
let suma;
inputNumero.value = contador;
let valorNro = inputNumero.value;

let funcionAumentar = () => {
    inputNumero.value++;
} 

let funcionDecrementar = () => {
    inputNumero.value--;
} 

let funcionAgregarDeUna = () => { 
    let cantidadAgregada = inputCant.value;
    suma = parseInt(cantidadAgregada) + parseInt(inputNumero.value);   
    console.log(suma);
    inputNumero.value = suma;   
}

btnMas.addEventListener('click', funcionAumentar);
btnMenos.addEventListener('click', funcionDecrementar);
btnAgregar.addEventListener('click', funcionAgregarDeUna);


