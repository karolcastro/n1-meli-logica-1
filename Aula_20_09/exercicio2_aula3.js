let cont, nome, nome2, altura, altura2;
altura2 = 0;
cont = 0;
nome2 = '';
soma = 0;
media = 0; //os dados no comeco sempre comecaram no zero, a nao ser que o exercicio mude a solicitacao

//solicita as alturas e pede os nomes
while(cont < 5){
    nome = prompt('Digite seu nome')
    altura = parseFloat(prompt(' Digite sua altura'))

    //compara as alturas
    if(altura > altura2){
        nome2 = nome;
        altura2 = altura
        soma = soma + altura;//criou a variavel soma
        media = soma/(cont);// criou a variavel media
    }
    //implementar mais 1 no contador
    cont ++;
}
//ao final informa o mais alto
alert (`${nome2} é o atleta mais alto com ${altura2} metros e a media das alturas é ${media}`)
