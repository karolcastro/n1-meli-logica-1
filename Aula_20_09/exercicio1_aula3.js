/*Escreva um programa que solicita o nome e a altura de 5 atletas. Ao final da entrada de dados, 
informe A ALTURA do atleta mais alto*/

/* inicio

declara
recebe o nome
recebe a altura
inicia a contagem

compara as alturas

retonar altura maior

Fim*/


// declarar as variaves
let cont, nome, altura, altura2;
altura2 = 0;
cont = 0;


//solicita as alturas e pede os nomes
while(cont < 5){
    nome = prompt('Digite seu nome')
    altura = parseFloat(prompt(' Digite sua altura'))

    //compara as alturas
    if(altura > altura2){
        altura2 = altura
    }
    //implementar mais 1 no contador
    cont ++;
}
//ao final informa o mais alto
alert (` O atleta mais alto tem ${altura2} metros`)

