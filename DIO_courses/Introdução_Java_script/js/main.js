/*   Aula 1

var nome = "Samuel Silveira";
var idade = "23";
var idade2 = "10";
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos"); //popup
//alert(idade + idade2);

console.log(nome);
console.log(idade + idade2);

console.log(frase);
console.log(frase.replace("Japão","Brasil"));
alert(frase.replace("Japão","Brasil"));

console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

//é possível debugar pelo console
*/


/*     Aula 2 

var lista = ["maçã","pêra","laranja"];
    lista.push("uva"); // adiciona um elemento no array
console.log(lista);
alert(lista[0]);
    lista.pop(); // retira um elemento do array
console.log(lista);
    console.log(lista.length); // imprime numero de elementos na lista
    console.log(lista.reverse()); // inverte a ordem

    console.log(lista.toString()); //escreve como string, se colocar só um [0] no final trata como array

    console.log(lista.join(" ¦ ")); // apresenta os elementos com um elemento no meio

var fruta = {nome: "maçã", cor: "vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);

var frutas = [{nome: "maçã", cor: "vermelha"}, {nome:"uva", cor:"Roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*   Aula 3  

var idade = prompt("Qual sua idade?"); // pergunta
if(idade >= 18){
    alert("Maior de idade!")
} else {
    alert("Menor de idade!")
};

var count = 0;
while(count<=5){
    console.log(count);
    count += 1; // count++
}

var count;
for(count = 1; count <=5; count++){
    console.log(count);
}

var d = new Date(); // trás a data
alert(d);
alert(d.getMonth()+1);
alert(d.getMinutes());

var d = new Date(); // trás a data
alert(d.getDate());

var lista = ["Alemanha","Inglaterra", "Escócia"];
lista.push("Polônia");
lista.pop("Inglaterra");
console.log(lista);
*/

/* ------------------
    Aula 4 

function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil!"));

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));

*/
function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>"; //injeta html
}

function redirecionar(){
    window.open("https://www.google.com/"); // abre um link
    //window.location.href = "https://www.google.com/"; //abre na mesma página
}

function mouse(elemento){
    //document.getElementById("mouseMove").innerHTML = "Obrigado por passar o mouse!";
    //alert("Trocar texto!");
    elemento.innerHTML = "Obrigado por passar o mouse!";
}

function voltar(elemento){
    //document.getElementById("mouseMove").innerHTML = "passe o mouse!";
    elemento.innerHTML = "passe o mouse!";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){ // com o onchange voce consegue coletar o valor que foi alterado
    console.log(elemento.value);
}