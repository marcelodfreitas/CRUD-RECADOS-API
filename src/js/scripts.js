const notesContainer = document.querySelector(".notes-list");
const prevPage = document.getElementById("prev-page");
const nextPage = document.getElementById("next-page");

let currentPage = 1;
let totalPages = 5;

async function fetchNotes(page) {
  try {
    notesContainer.innerHTML = "";

    //const userId = 'marcelo@gmail.com'
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Você precisa estar logado para ver as notas!");

      location.href = 'login.html'
      return;
    }

    const params = {
      page,
      perPage: 3
    };

    const response = await api.get(`/${userId}`, { params });

    const messages = response.data.userNotes;
    totalPages = response.data.totalPages;

    console.log(response.data)


    
    messages.forEach((note) => {
      const noteCard = document.createElement("div");
      noteCard.classList.add("card");

      noteCard.innerHTML = `
        <h2 class="card-title">${note.title}</h2>
        <p class="card-description">${note.description}</p>
        <div class="card-icons">
            <i class="fa-solid fa-trash" data-id=${note.id}></i>
            <i class="fa-solid fa-edit" data-id=${note.id}></i>
        </div>
        `;

      notesContainer.appendChild(noteCard);

      
      
      // Deletar Nota
      const deleteIcon = noteCard.querySelector(".fa-trash");

      deleteIcon.addEventListener("click", () => {
        const noteId = deleteIcon.getAttribute("data-id");

        deleteNote(noteId);
      });

      // Editar Nota
      const editIcon = noteCard.querySelector(".fa-edit");
      editIcon.addEventListener("click", () => {
        const noteId = editIcon.getAttribute("data-id");

        //editNote(noteId);
        navigateToEditPage(noteId);
        
      });
    });

    if (messages.length === 0) {
      const emptyNoteList = document.createElement("h3");
      emptyNoteList.innerText = "Nenhum recado encontrado";
      notesContainer.appendChild(emptyNoteList);
    }

    updatePaginationButtons();
  } catch (error) {
    console.error("Erro ao buscar recados", error);
  }
}

fetchNotes(currentPage);



function navigateToEditPage(noteId) {
  location.href = `edit-note.html?id=${noteId}`;
}



prevPage.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchNotes(currentPage);
  }
});

nextPage.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    fetchNotes(currentPage);
  }
});

function updatePaginationButtons() {
  console.log(totalPages)
  prevPage.disabled = currentPage === 1;
  nextPage.disabled = currentPage === totalPages;
}
