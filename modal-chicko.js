// modal code
const miniClose = document.querySelector(".modal-close-btn");
const okBtn = document.querySelector(".modal-ok-btn");
const openModal = document.getElementById("open-modal");
const modalError = document.getElementById("modal-error");
const overlay = document.querySelector(".modal-overlay");

// close function
function close() {
  modalError.classList.add("hidden");
  overlay.classList.add("hidden");
}

// open modal with button
openModal.addEventListener("click", function (e) {
  e.preventDefault();
  modalError.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// close event listener
miniClose.addEventListener("click", close);
okBtn.addEventListener("click", close);
