window.onload = () => {
    cargarListaDesdeLocalStorage();

    document.getElementById("intro").addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            anadirALista();
        }
    });

    document.getElementById("introbtn").addEventListener("click", (e) => {
        e.preventDefault();
        anadirALista();
    });

    document.getElementById("borrarLista").addEventListener("click", borrarListaCompleta);
};

var lista = [];

function anadirALista() {
    let elemento = document.getElementById("intro").value;
    if (elemento !== "" && !lista.includes(elemento)) {
        lista.push(elemento);
        guardarListaEnLocalStorage();
        document.getElementById("intro").value = "";
        imprimirLista();
    }
}

function imprimirLista() {
    let contenedor = document.getElementById("lista");
    contenedor.innerHTML = "";

    lista.forEach((item, index) => {
        let nuevoDiv = document.createElement("div");
        nuevoDiv.id = `elemento-${index}`;
        nuevoDiv.className = "elemento";
        nuevoDiv.innerText = item;

        let btnMarcar = document.createElement("img");
        btnMarcar.src = "iconoCheck.png";
        btnMarcar.alt = "Marcar";
        btnMarcar.className = "btn-icon";
        btnMarcar.addEventListener("click", () => {
            marcar(index);
        });

        let btnEliminar = document.createElement("img");
        btnEliminar.src = "iconoEliminar.png";
        btnEliminar.alt = "Eliminar";
        btnEliminar.className = "btn-icon";
        btnEliminar.addEventListener("click", () => {
            eliminarElemento(index);
        });

        nuevoDiv.appendChild(btnMarcar);
        nuevoDiv.appendChild(btnEliminar);

        contenedor.appendChild(nuevoDiv);
    });
}

function marcar(index) {
    let elemento = document.getElementById(`elemento-${index}`);
    elemento.classList.toggle("marcado");
}

function eliminarElemento(index) {
    lista.splice(index, 1);
    guardarListaEnLocalStorage();
    imprimirLista();
}

function borrarListaCompleta() {
    lista = [];
    guardarListaEnLocalStorage();
    imprimirLista();
}

function guardarListaEnLocalStorage() {
    localStorage.setItem("miLista", JSON.stringify(lista));
}

function cargarListaDesdeLocalStorage() {
    let listaGuardada = localStorage.getItem("miLista");
    if (listaGuardada) {
        lista = JSON.parse(listaGuardada);
        imprimirLista();
    }
}
