const formulario = document.getElementById("form-login");
const email = document.getElementById("email");
const password = document.getElementById("password");
const tooglePassword = document.getElementById("tooglePassword");

async function login(logate) {
  try {
    const response = await api.post("/login", logate);
    const token = response.data.userId;
console.log(response.data);
    if (response.status === 200) {
      localStorage.setItem("userId", token);
      

      window.location.href = "index.html";
    }
  } catch (error) {
    alert("Login Incompleto, preencha todos os campos ou revise os dados inseridos!", error);
  }
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const logate = {
    email: email.value,
    password: password.value,
  };

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

     login(logate);
  

 
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

  tooglePassword.onclick = function showHide() {
    if (password.type === 'password') {
        password.setAttribute('type', 'text');
        tooglePassword.classList.add('hide');
    } else {
        password.setAttribute('type', 'password')
        tooglePassword.classList.remove('hide');
    };
  }
