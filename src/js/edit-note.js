const formEditNote = document.getElementById("form-edit-note");
const title = document.getElementById("title-edit");
const description = document.getElementById("description-edit");

const urlParams = new URLSearchParams(location.search); //?id=123
const noteId = urlParams.get("id");

async function populatedEditForm() {
  try {
    const response = await api.get(`/details/${noteId}`);
    const note = response.data;

    (title.value = note.title), (description.value = note.description);
  } catch (error) {
    console.error("Erro ao buscar recado", error);
  }
}

populatedEditForm();

formEditNote.addEventListener("submit", (event) => {
  event.preventDefault();

  const note = {
    title: title.value,
    description: description.value,
  };
  updatedNote(noteId, note);
});

async function updatedNote(noteId, note) {
  try {
    const response = await api.put(`/message/${noteId}`, note);

    if (response.status === 200) {
      alert("Recado atualizado com sucesso");
    }

    location.href = "index.html";
  } catch (error) {
    console.error("Erro ao atualizar nota");
  }
}
