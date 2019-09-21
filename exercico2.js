/*
Escrever um algoritmo que leia dois valores inteiro distintos e informe qual deles é o maior.
*/

/**
 Inicio

 ler um numero 1 inteiro
 ler um numero 2 inteiro

 se numero 1 >= numero 2
    'numero é maior que o numero 2'
 se nao
    'numero é menor que numero 2'


 se numero 2 >= numero 1
    'numero é maior que o numero 1'
 se nao 
    ' numero é menor que o numero 1'   
 
 fim
 **/

 const numero1 = parseInt(prompt('Digite o primeiro numero'))
 const numero2 = parseInt(prompt('Digite o segundo numero'))

 if(numero2 > numero1) {
     alert(`${numero2} é maior que o ${numero1}`)
 } else {
     alert(`${numero1} é maior que o ${numero2}`)
 }