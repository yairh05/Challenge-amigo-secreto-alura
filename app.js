// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let nameStorage =[];

function agregarAmigo() {
    const inputFriend = document.getElementById("amigo")
    const nameFriend = inputFriend.value 


    if (nameFriend == "") {
        alert("Por favor agregar un nombre")

        return;
    }if (nameStorage.includes(nameFriend)) {
        alert("El nombre ya esta en la lista")

        return;
    }else{
        nameStorage.push(nameFriend);
        inputFriend.value="";
    }

   let addFriend = document.getElementById("listaAmigos")
        addFriend.innerHTML ="";
    for (let i = 0; i < nameStorage.length; i++) {
        const storageFriendArray = nameStorage[i];
        
        let newName = document.createElement("li")
        newName.textContent = storageFriendArray;

        addFriend.appendChild(newName);
    }
}


function sortearAmigo() {

    if (nameStorage.length === 0 ) {
        alert("No hay amigos para realizar sorteo")
        return
    }
    
    let random = Math.floor(Math.random() * nameStorage.length)
    let randomFriend = nameStorage[random]

    nameStorage.splice(random, 1);

    
    document.getElementById("resultado").innerHTML = `Tu amigo sorteado es : ${randomFriend}`
    
}