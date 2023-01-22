var botonEncriptar = document.querySelector(".encriptar-buton")
var botonDesencriptar = document.querySelector(".desencriptar-buton")
var muñeco = document.querySelector(".caja-muñeco");
var ningun = document.querySelector(".caja-nigun");
var ingrese = document.querySelector(".caja-ingrese");
var resultado = document.querySelector(".texto-resultado")
var botoncopiar = document.querySelector(".buton-copiar")


botonEncriptar.onclick = encriptaryremplazar;
botonDesencriptar.onclick = desencriptaryremplazar;
botoncopiar.onclick = copiartexto;

function encriptaryremplazar(){
    ocultarmuñecoyotros()
    resultado.textContent = encriptar(conseguirTexto())
    
}

function desencriptaryremplazar(){
    ocultarmuñecoyotros()
    resultado.textContent = desencriptar(conseguirTexto())
    
}

function copiartexto(){
    var input = resultado.textContent
    navigator.clipboard.writeText(input);
    resultado.textContent = []
    
    alert("Texto Copiado!");
    
}

function conseguirTexto(){
    var texto = document.querySelector(".texto");
    return texto.value;
}

function ocultarmuñecoyotros(){
    muñeco.classList.add("ocultar")
    ningun.classList.add("ocultar")
    ingrese.classList.add("ocultar")
    botoncopiar.classList.add("mostrar")
}


var texto = input.value

function saltarLinea() {
    document.write("<br>");    
    document.write("<br>");    
    document.write("<br>");    
}  

function imprimir(frase) {
    document.write(frase);
    saltarLinea();
}


function encriptar(texto){
    var textocriptado = []
    for(contador = 0; contador < texto.length;contador++){
        if(texto[contador] == "a"){
            textocriptado = textocriptado + "ai"
        }
        else if(texto[contador] == "e"){
            textocriptado = textocriptado + "enter" 
        }
        else if(texto[contador] == "i"){
            textocriptado = textocriptado +"imes"
        }
        else if(texto[contador] == "o"){
            textocriptado = textocriptado +"ober"
        }
        else if(texto[contador] == "u"){
            textocriptado = textocriptado +"ufat"
        }
        else{
            textocriptado = textocriptado + texto[contador]
        }
    }
    return(textocriptado)
}

function desencriptar(texto){
    var textodescriptado = []
    contador = 0
    while(contador < texto.length){
        if(texto[contador] == "a"){
            textodescriptado = textodescriptado + "a"
            contador = contador + 2
        }
        else if(texto[contador] == "e"){
            textodescriptado = textodescriptado + "e"
            contador = contador + 5
        }
        else if(texto[contador] == "i"){
            textodescriptado = textodescriptado +"i"
            contador = contador + 4
        }
        else if(texto[contador] == "o"){
            textodescriptado = textodescriptado +"o"
            contador = contador + 4
        }
        else if(texto[contador] == "u"){
            textodescriptado = textodescriptado +"u"
            contador = contador + 4
        }
        else{
            textodescriptado = textodescriptado + texto[contador]
            contador++
        }
    }

    return(textodescriptado)
}   