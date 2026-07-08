produtos = ["arroz","feijao","macarrão","açúcar","sal"]
precos = [16,22,25,15,10]
posicao = 0;


function mostrarprodutos(){
    let local=document.getElementById("add");


    for(posicao=0;posicao< produtos.length;posicao++)
    {
        let texto=document.createElement("p");
        texto.textContent=produtos[posicao]+" R$"+ precos[posicao];
        local.appendChild(texto);
    }
}




function Calcularsoma(){
    let local=document.getElementById("ac");
    let soma=0;


    for(posicao=0;posicao< produtos.length;posicao++)
    {
        let texto=document.createElement("p");
        texto.textContent=produtos[posicao]+" R$"+ precos[posicao];
        local.appendChild(texto);
        soma = soma + precos[posicao];

    }
    document.getElementById("oiii").textContent=soma;
}


function cofee(){
let soma=0;
let valor=Number(prompt("digite um valor:"));
while(valor!=0){
    soma= soma+valor;
    valor=Number(prompt("digite outro valor:"));
}
document.getElementById("resultado").textContent= "A soma final é:" + soma;
}


alunos=["Ana,Bruno,Carla,Diego,Eduarda"]
nota=["80,45,70,55,90"]


function gerar() {
    let p = document.getElementById("css");
    for (let i = 0; i < alunos.length; i++) {
        p.textContent = alunos[i]
    }





