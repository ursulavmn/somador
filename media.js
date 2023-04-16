var nota1 = 8.0
var nota2 = 9.5
var nota3 = 9.5
var nota4 = 9.6
var media1 = (nota1 + nota2) / 2
var media2 = (nota3 + nota4) / 2

if(media1 >= 7 && media2 >= 7){ // v e v
    console.log("Aluno Aprovado")
} else if ( media1 >= 7 || media2 >= 7){ // apenas uma v 
    console.log("Aluno de Recuperação com uma media ruim ")
} else if (media1 < 7  && media2 < 7){ 
    console.log("aluno de recuperação com duas medias ruins")
} else if (media1 <= 2 && media2 <= 2){
    console.log("aluno reprovado")
} else {
    console.log("procure a cordenação do seu curso")
}



function imprimirnoconsole (){
    console.log("olá mundo!")
}

imprimirnoconsole();

//parametros

function imprimirumnumero(num){ 
console.log("o número é; " + num);

}

imprimirumnumero(2)