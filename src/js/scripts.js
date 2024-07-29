const notesContainer = document.querySelector(".notes-list");

async function fetchNotes() {
  try {
    notesContainer.innerHTML = "";

    //const userId = 'marcelo@gmail.com'
    const userId = localStorage.getItem("userId");

    const response = await api.get(`/message/${userId}`);
    const notes = response.data.messages;
    console.log(response.data);

    console.log(notes);
    notes.forEach((note) => {
      const noteCard = document.createElement("div");
      noteCard.classList.add("card");
    
const notesContainer = document.querySelector('.notes-list')
    

async function fetchNotes() {
  try {
    notesContainer.innerHTML = ''

    // const userId = '071ca4b9-3695-4c66-a769-04f806187185'
    const userId = localStorage.getItem('userId')

    const response = await api.get(`/notes/${userId}`)
    const notes = response.data.userNotes

    notes.forEach(note => {
      const noteCard = document.createElement('div')
      noteCard.classList.add('card')


      noteCard.innerHTML = `
        <h2 class="card-title">${note.title}</h2>
        <p class="card-description">${note.description}</p>
        <div class="card-icons">
            <i class="fa-solid fa-trash" data-id=${note.id}></i>
            <i class="fa-solid fa-edit" data-id=${note.id}></i>
        </div>
        `;

      notesContainer.appendChild(noteCard);

      const deleteIcon = noteCard.querySelector(".fa-trash");

      // Deletar Nota
      deleteIcon.addEventListener("click", () => {
        const noteId = deleteIcon.getAttribute("data-id");

        deleteNote(noteId);
      });

      // Editar Nota
      const editIcon = noteCard.querySelector(".fa-edit");
      editIcon.addEventListener("click", () => {
        const noteId = editIcon.getAttribute("data-id");

        editNote(noteId);
      });
    });

    if (notes.length === 0) {
      const emptyNoteList = document.createElement("h3");
      emptyNoteList.innerText = "Nenhum recado encontrado";
      notesContainer.appendChild(emptyNoteList);
    }
  } catch (error) {
    console.error("Erro ao buscar recados", error);
  }
}

function editNote(noteId) {
  location.href = `edit-note.html?id=${noteId}`;
}

fetchNotes();

noteCard.innerHTML = `
        <h2 class="card-title">${note.title}</h2>
        <p class="card-description">${note.description}</p>
        <div class="card-icons">
          <i class="fa-solid fa-trash" data-id=${note.id}></i>
          <i class="fa-solid fa-edit" data-id=${note.id}></i>
        </div>
      `

      notesContainer.appendChild(noteCard)

      const deleteIcon = noteCard.querySelector('.fa-trash')

      // Deletar uma nota
      deleteIcon.addEventListener('click', () => {
        const noteId = deleteIcon.getAttribute('data-id')

        deleteNote(noteId)
      })

      // Editar uma nota
      const editIcon = noteCard.querySelector('.fa-edit')
      editIcon.addEventListener('click', () => {
      const noteId = editIcon.getAttribute('data-id')

      navigateToEditPage(noteId)
      })
    })

    if (notes.length === 0) {
      const emptyNoteList = document.createElement('h3')
      emptyNoteList.innerText = 'Nenhum recado encontrado.'
      notesContainer.appendChild(emptyNoteList)
    }
  } catch (error) {
    console.error('Erro ao buscar recados.', error)
  }
}

function navigateToEditPage(noteId) {
  location.href = `edit-note.html?id=${noteId}`
}

fetchNotes()

