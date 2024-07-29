const formNewNote = document.getElementById("form-new-note");
const title = document.getElementById("title");
const description = document.getElementById("description");

async function createNewMessage(note) {
  try {
    const response = await api.post("/message", note);

    if (response.status === 201) {
      alert("Recado cadastrado com sucesso!");
    }

    title.value = "";
    description.value = "";

    window.location.href = "index.html";
  } catch {
    console.error("Erro ao cadastrar o recado:", error);
  }
}

formNewNote.addEventListener("submit", (event) => {
  event.preventDefault();

  //const userId = "marcelo@gmail.com"
  const userId = localStorage.getItem("userId");


  const newNote = {
    title: title.value,
    description: description.value,
    email: userId,
  };

  createNewMessage(newNote);
});
