const submitBtn = document.getElementById("submitBtn")
const inputEmail = document.getElementById("inputEmail")
const inputSenha = document.getElementById("inputPassword")


function clearForm(){
    submitBtn.addEventListener("click")
    inputEmail.innerHTML= "";
    inputSenha.innerHTML= "";
}

function validarForm(){
    if(inputEmail.value == ""){
        alert("Insira os dados corretamente.")
        inputEmail.focus();
        return false;
    }
    else if(inputSenha.value == ""){
        alert("Insira os dados corretamente")
        inputSenha.focus();
        return false;
    }else{
        alert("Dados insiridos corretamente.")
        clearForm()
        return true
    }
}