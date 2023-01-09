const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const entrar = document.getElementById("entrar");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs()
});

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue === ""){
        setErrorFor(username, "O nome de usuário é obrigatório");
    } else {
        setSuccesFor(username);
    }

    if (emailValue === ""){
        setErrorFor(email, 'O email é obrigatório');
    }else if(!checkEmail(emailValue)){
        setErrorFor(email, 'Por favor insira um email válido');
    }else {
        setSuccesFor(email);
    }

    if (passwordValue ===""){
        setErrorFor(password, 'A senha é obrigatória');
    } else if(passwordValue.length < 7){
        setErrorFor(password, 'A senha precisa ter mais que 6 caracteres');
    }else {
        setSuccesFor(password);
    }

    if(passwordConfirmationValue ===""){
        setErrorFor(passwordConfirmation, 'Insira sua senha novamnete')
    }else if (passwordConfirmationValue !== passwordValue){
        setErrorFor(passwordConfirmation, 'As senhas não comferem');
    }else{
        setSuccesFor(passwordConfirmation);
    }

    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success";
      });
    
      if (formIsValid) {
        entrar.classList.remove("showThewayOff");
        entrar.classList.add("showThewayOn");
        console.log("O formulário está 100% válido!");
      }
};

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small =formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control error'
};


function setSuccesFor(input){
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
};

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }