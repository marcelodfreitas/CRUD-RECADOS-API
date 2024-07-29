async function deleteNote(noteId) {
  try {
    const response = await api.delete(`/message/${noteId}`);

    if (response.status === 200) {
      alert("Recado excluido com sucesso");

      window.location.href = "index.html";
    }
  } catch (error) {
    console.error("Erro ao deletar recado", error);
  }
}
