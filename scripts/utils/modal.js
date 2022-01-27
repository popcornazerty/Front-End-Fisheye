function openModal(imgName) {
    const divModal = document.getElementById("img-modal");
    divModal.style.display = "block";
    const img = document.createElement("img");
    img.src = "assets/images/photos/mimi/" + imgName;
    divModal.appendChild(img);
}

function closeModal(imgName) {
    const divModal = document.getElementById("img_modal");
    divModal.style.display = "none";
}