const formLogin = document.getElementById("form-login");
const nome = document.getElementById("nome");
const usuario = document.getElementById("usuario");
const password = document.getElementById("senha");
const tooglePasswordSignUp = document.getElementById("tooglePasswordSignUp");

async function signUp(userDados) {
  try {
    const response = await api.post("/signup", userDados);
    const token = response.data.user;

    console.log(token);
    if (response.status === 201) {
    window.location.href = "login.html";
    }
  } catch (error) {
    console.error("Cadastro Incompleto", error);
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

tooglePasswordSignUp.onclick = function showHide() {
  if (senha.type === "password") {
    password.setAttribute("type", "text");
    tooglePasswordSignUp.classList.add("hide");
  } else {
    senha.setAttribute("type", "password");
    tooglePasswordSignUp.classList.remove("hide");
  }
};
