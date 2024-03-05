const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#campo-mensaje");

const matriz_code = [
    ["e", "enter"], // indice 0
    ["i", "imes"], // indice 1
    ["a", "ai"], // indice 2
    ["o", "ober"], // indice 3
    ["u", "ufat"], // indice 4
 ];

function btnEncriptar(){
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
    campo_texto.value = "";
}

function btnDesencriptar(){
    const textoP = desencriptar(campo_mensaje.value);
    campo_texto.value = textoP;
    campo_mensaje.value = "";
}


function encriptar(fraseEncriptada){
    for(let i = 0; i < matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            )
        }
    }
    return fraseEncriptada;
}

function desencriptar(fraseDesencriptada){
    for(let i = 0; i < matriz_code.length; i++){
      if(fraseDesencriptada.includes(matriz_code[i][1])){
        fraseDesencriptada = fraseDesencriptada.replaceAll(
          matriz_code[i][1],
          matriz_code[i][0]
        );
      }
    }
    return fraseDesencriptada;
  }

console.log(matriz_code.length);