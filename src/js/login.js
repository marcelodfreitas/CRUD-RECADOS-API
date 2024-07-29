const formulario = document.getElementById("form-login");
const username = document.getElementById("usuario");
const senha = document.getElementById("senha");

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
    console.error("Login Incompleto", error);
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



const togglePassword = document.getElementById('tooglePassword')

tooglePassword.onclick = function showHide() {
    if (senha.type === 'password') {
        password.setAttribute('type', 'text');
        tooglePassword.classList.add('hide');
    } else {
        senha.setAttribute('type', 'password')
        tooglePassword.classList.remove('hide');
    };
};