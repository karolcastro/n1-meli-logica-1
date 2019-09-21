//1.1. Complemente o exercício anterior agora informando o NOME e a ALTURA do atleta mais alto.


let cont, nome, nome2, altura, altura2;
altura2 = 0;
cont = 0;
nome2 = '';

//solicita as alturas e pede os nomes
while(cont < 5){
    nome = prompt('Digite seu nome')
    altura = parseFloat(prompt(' Digite sua altura'))

    //compara as alturas
    if(altura > altura2){
        nome2= nome;
        altura2 = altura
    }
    //implementar mais 1 no contador
    cont ++;
}
//ao final informa o mais alto
alert (`${nome2} O atleta mais alto tem ${altura2} metros`)