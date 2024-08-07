const formNewUser = document.getElementById('form-new-user')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const password = document.getElementById('password')
const tooglePasswordSignUp = document.getElementById("tooglePasswordSignUp")

async function signUp(userDados) {
  try {
    const response = await api.post('/signup', userDados)
    
    if (response.status === 201) {
      window.location.href = 'login.html'
    }
  } catch (error) {
    alert("Cadastro Incompleto, preencha todos os campos!", error);
  }

}

formNewUser.addEventListener('submit', (event) => {
  event.preventDefault()

  const data = {
    name: nome.value,
    email: email.value,
    password: password.value
  };

  if (!nome.value) {
    setError(nome, "Preencha o campo de nome");
  } else {
    setSuccess(nome);
  }
  if (!email.value) {
    setError(email, "Preencha o campo de email");
  } else {
    setSuccess(email);
  }
  if (!password.value) {
    setError(password, "Preencha o campo de senha");
  } else {
    setSuccess(password);
  }


  signUp(data)
  
});

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.classList.remove("success");
  formControl.classList.add("error");
}

function setSuccess(input) {
  const formControl = input.parentElement;

  formControl.classList.remove("error");
  formControl.classList.add("success");
}

tooglePasswordSignUp.onclick = function showHide() {
  if (password.type === 'password') {
      password.setAttribute('type', 'text');
      tooglePasswordSignUp.classList.add('hide');
  } else {
      password.setAttribute('type', 'password')
      tooglePasswordSignUp.classList.remove('hide');
  };
}