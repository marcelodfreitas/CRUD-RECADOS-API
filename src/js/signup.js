const formLogin = document.getElementById("form-login");
const nome = document.getElementById("nome");
const usuario = document.getElementById("usuario");
const password = document.getElementById("senha");
const tooglePassword = document.getElementById("tooglePasswordSignUp")

async function signUp(userDados) {
  try {
    const response = await api.post("/signup", userDados);
    const token = response.data.user;

    console.log(token);
    if (response.status === 201) {
      window.location.href = "login.html";
    }
  } catch (error) {
    console.error("Login Incompleto", error);
  }
}

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  const userDados = {
    name: nome.value,
    email: usuario.value,
    password: password.value,
  };

  signUp(userDados);
});


tooglePassword.onclick = function showHide() {
    if (senha.type === 'password') {
        password.setAttribute('type', 'text');
        tooglePassword.classList.add('hide');
    } else {
        senha.setAttribute('type', 'password')
        tooglePassword.classList.remove('hide');
    };
};