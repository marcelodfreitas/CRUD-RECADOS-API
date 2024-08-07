const formulario = document.getElementById("form-login");
const username = document.getElementById("usuario");
const senha = document.getElementById("senha");
const tooglePassword = document.getElementById('tooglePassword')

async function login(logate) {
  try {
    const response = await api.post("/login", logate);
    const token = response.data.user;

    if (response.status === 200) {
      localStorage.setItem("userId", token);
      console.log(token);

      location.href = "index.html";
    }
  } catch (error) {
    alert("Credenciais Inválidas! Verifique se possui cadastro!", error);
  }
}


formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const logate = {
    email: username.value,
    password: senha.value,
  };

  login(logate);
});


tooglePassword.onclick = function showHide() {
    if (senha.type === 'password') {
        senha.setAttribute('type', 'text');
        tooglePassword.classList.add('hide');
    } else {
        senha.setAttribute('type', 'password')
        tooglePassword.classList.remove('hide');
    };
};