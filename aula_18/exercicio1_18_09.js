/*Escreva um programa que sorteia um número de 1 a 10 e dá duas chances para que o usuário acerte.//

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
Fim */
//aqui eu pego o numero com While

let sorte = Math.floor(Math.random()*10+1)
let cont = 0
let resp = '';

console.log('sorte: ', sorte )
while(cont < 2){
    const num = parseInt(prompt('Digite um número'))
    console.log('cont: ', cont)

    if(num == sorte){
        resp = 'Acertou!'
        break;
    }else{
        if(sorte > num){
            alert(`Sorte é maior!`)
            resp = 'Errou'
        }else{
            alert(`Sorte é menor!`)
            resp = 'Errou'
        }
    }
    cont = cont + 1
}

alert(`Você ${resp} a sorte era ${sorte}`)


