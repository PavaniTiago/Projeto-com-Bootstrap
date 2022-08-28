const submitBtn = document.getElementById("submitBtn")
const inputEmail = document.getElementById("inputEmail")
const inputSenha = document.getElementById("inputPassword")

function avisoDeFormEnviado(){
    alert("Dados Enviados.")
}

function clearForm(){
    submitBtn.addEventListener("click")
    inputEmail.innerHTML= "";
    inputSenha.innerHTML= "";
}