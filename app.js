//Declaración de variables.
let nombreAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let listaResultado = document.getElementById('resultado');
let btnAgregar = document.getElementById('btnAgregar');
let amigos = [];

//Declaración de eventos.
//Creación de la función agregarAmigo, la cual es solicitada en el evento onclick del botón "Añadir".
function agregarAmigo(){
    //Validación de campo vacío.
    if(nombreAmigo.value == ""){
        alert("Por favor, inserte un nombre.");
    }else{
        amigos.push(nombreAmigo.value);
        actualizarListaAmigos();
        nombreAmigo.value = "";
    }
}
//Creación de la función actualizarListaAmigos, la cual realiza la actualización de la lista de amigos.
function actualizarListaAmigos(){
    listaAmigos.innerHTML = "";
    for(amigo of amigos){
        listaAmigos.innerHTML += `<li>${amigo}</li>`;
    }
}

//Creación de la función sortearAmigo, la cual es solicitada en el evento onclick del botón "sortear amigo".
function sortearAmigo(){
    listaAmigos.innerHTML = "";
    listaResultado.innerHTML = "";
    if(amigos.length == 0){
        alert("Por favor, añada al menos un amigo.");
    }else{
        var numeroRandom = Math.floor(Math.random() * amigos.length);
        listaResultado.innerHTML += `<li>Tu amigo secreto es: ${amigos[numeroRandom]}</li>`;
    }
}