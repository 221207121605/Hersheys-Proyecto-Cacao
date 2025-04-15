
function registrar() {
    const nombre = document.querySelector('input[name="nombre"]').value.trim();
    const celular = document.querySelector('input[name="celular"]').value.trim();
    const clave = document.querySelector('input[name="clave"]').value.trim();

    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");

    if (!nombre || !celular || !clave) {
        modalContent.innerText = "Por favor, llena todos los campos.";
        modalContent.className = "modal-content error";
    } else {
        modalContent.innerText = "Registro exitoso.";
        modalContent.className = "modal-content success";
        document.getElementById("registroForm").reset();
    }
    modal.style.display = "block";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}
