/*1.1. Escreva um programa que sorteia um número de 1 a 10, dá duas chances 
para que o usuário acerte, mas informa se o número sorteado é maior ou menor que o primeiro palpite.

// inicio
num = numero_recebido_do_usuario
sorte = numero_randomico

se num == sorte
    retorna Parabens, voce acertou
senao 
    num2 = numero_recebido_do_usuario
    se num2 == sorte
        retorna Parabens, voce acertou
    senao 
        retorna nao foi desta vez
            se a sorte > num1
                retorma  dica maior que o num1
            senao 
                retorna dica menor que o num1

Fim */

//pedir um numero
const num = parseInt(prompt('Digite um numero de 1 a 10'));

const sorte = Math.floor(Math.random()*10+1);


// aqui eu tento os numeros
if(num == sorte){
    alert ('Parabéns, você acertou')

}else{
    
    if(sorte > num){
        alert('numero da sorte maior que o primeiro numero')
    }else{
        alert('numero da sorte menor que o primeiro numero')
    
    
    const num2 = parseInt(prompt('Digite um numero de 1 a 10'));
    
    
    if(num2 == sorte){
        alert(`Parabens voce acertou! O numero é ${sorte}`)
    }else{
        
        if(sorte < num){
            alert('numero da sorte maior que o primeiro numero')
        }else{
            alert('numero da sorte menor que o primeiro numero')
            alert ('Nao foi desta vez')
        }
        }
    }
