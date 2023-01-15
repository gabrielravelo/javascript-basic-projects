const btnModal = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const btnClose = document.querySelector('.close-btn')

btnModal.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal)

function openModal() {
  modal.classList.add('open-modal');
}

function closeModal() {
  modal.classList.remove('open-modal');
}
