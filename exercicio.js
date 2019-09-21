/*
Faca um algoritmo que receba um numero e mostre uma mensagem caso este numero seja maior que 10
*/

/**
 Inicio

 receber um numero
 se numeri > 10
    'numero é maior que 10'
 se nao
    'numero nao é maior que 10'
 
 fim
 **/

 const numero = parseInt(prompt('digite um numero'))

 if(numero > 10) {
    document.write(`${numero} número é maior que 10!`)
 } else {
     if(numero === 10){
        alert(`${numero} é igual a 10`)
     } else {
        alert(`${numero} não é maior que 10 e nem igual a 10`)
    }  
 }