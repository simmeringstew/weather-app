// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

let apiKey = undefined;

// selector for the modal
const myModal = document.querySelector(".modal");
const modal = new bootstrap.Modal(myModal);

window.onload = () => {
    modal.show();
}

const apiInput = document.querySelector("#apiKeyInput");
const submit = document.querySelector(".modal-submit");
submit.addEventListener("click", () => {
    apiKey = apiInput.value;
});