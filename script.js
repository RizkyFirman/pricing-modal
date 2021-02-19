const closeBtn = document.getElementById("close");
const cancelBtn = document.getElementById("cancel-button");
const showBtn = document.getElementById("show-button");
const container = document.querySelector(".container");

const openModal = function() {
    container.style.display = 'grid';
    showBtn.style.display = 'none';
}

const closeModal = function() {
    container.style.display = 'none';
    showBtn.style.display = 'block';
}

showBtn.addEventListener('click', openModal);
cancelBtn.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);