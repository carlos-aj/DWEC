window.onload = () => {
    const contenedorDiv = document.getElementById("contenedorDiv");
    const crearBtn = document.getElementById("crear");
    const tituloInput = document.getElementById("titulo");
    const mensajeInput = document.getElementById("mensaje");

    let notes = []; 

    const saveNotes = () => {
        localStorage.setItem("notes", JSON.stringify(notes));
    };

    const loadNotes = () => {
        const savedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
        savedNotes.forEach(note => createNote(note.title, note.content, note.x, note.y));
    };

    const createNote = (title, content, x = 100, y = 100) => {
        const noteDiv = document.createElement("div");
        noteDiv.className = "note";
        noteDiv.style.left = `${x}px`;
        noteDiv.style.top = `${y}px`;

        
        noteDiv.style.width = "200px";
        noteDiv.style.height = "200px";

        
        noteDiv.innerHTML = `
            <button class="close">x</button>
            <h4 contenteditable="true">${title}</h4>
            <p contenteditable="true">${content}</p>
        `;

        noteDiv.onmousedown = (e) => {
            let offsetX = e.clientX - noteDiv.offsetLeft;
            let offsetY = e.clientY - noteDiv.offsetTop;

            const onMouseMove = (event) => {
                noteDiv.style.left = `${event.clientX - offsetX}px`;
                noteDiv.style.top = `${event.clientY - offsetY}px`;
            };

            document.addEventListener("mousemove", onMouseMove);

            document.onmouseup = () => {
                document.removeEventListener("mousemove", onMouseMove);
                document.onmouseup = null;

                const index = notes.findIndex(n => n.element === noteDiv);
                if (index >= 0) {
                    notes[index].x = parseInt(noteDiv.style.left);
                    notes[index].y = parseInt(noteDiv.style.top);
                    saveNotes();
                }
            };
        };

        noteDiv.querySelector(".close").onclick = () => {
            contenedorDiv.removeChild(noteDiv);
            notes = notes.filter(n => n.element !== noteDiv);
            saveNotes();
        };

        contenedorDiv.appendChild(noteDiv);
        notes.push({ title, content, x, y, element: noteDiv });
        saveNotes();
    };

    crearBtn.onclick = () => {
        const title = tituloInput.value.trim();
        const content = mensajeInput.value.trim();
        if (title && content) {
            createNote(title, content);
            tituloInput.value = "";
            mensajeInput.value = "";
        }
    };

    loadNotes();
};
