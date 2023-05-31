const form = document.querySelector('form');
const submitbtn = document.getElementById("submitbtn");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const dados = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("password").value,
        telefone: document.getElementById("telefone").value
    }


    console.log(dados);
    
});

// como fazer para funcionar 
//document.addEventListener("keydown", (event)=> {
 //   event.preventDefault();
 //   if(event.key === "q") {
 //       console.log("Apertou a tecla q");
//    }

    
//})