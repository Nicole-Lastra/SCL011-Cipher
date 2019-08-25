/*Acá va tu código*/
//declaración de las funciones
let message, offset;


document.getElementById('encodeButton').addEventListener('click',()=>{ //función del botón 'encodeButton' para cifrar
message = document.getElementById('message').value.toUpperCase();
offset = parseInt(document.getElementById('offset').value);

document.getElementById('messageResult').innerHTML = window.cipher.encode(message, offset); //llama al cipher.js para imprimir en el html por (message,offset) 
})


document.getElementById('decodeButton').addEventListener('click',()=>{ //función del botón 'decodeButton' para descifrar
message = document.getElementById('message').value.toUpperCase();
offset = parseInt(document.getElementById('offset').value);

document.getElementById('messageResult').innerHTML = window.cipher.decode(message, offset); //llama al cipher.js para imprimir en el html por (menssage,offset)

})