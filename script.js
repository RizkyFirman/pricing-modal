const closeBtn = document.getElementById("close");
const cancelBtn = document.getElementById("cancel-button");
const showBtn = document.getElementById("show-button");
const welcome = document.getElementById("welcome");
const container = document.getElementById("container");

const openModal = function() {
    container.style.display = 'grid';
    welcome.style.display = 'none';
}

const closeModal = function() {
    container.style.display = 'none';
    welcome.style.display = 'flex';
}

showBtn.addEventListener('click', openModal);
cancelBtn.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);