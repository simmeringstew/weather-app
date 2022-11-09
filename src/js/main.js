// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import getWeather from "./getWeather"

let apiKey = undefined;

// selector for the modal
const myModal = document.querySelector(".modal");
const modal = new bootstrap.Modal(myModal);

// shows the modal on page load to get the api key
window.onload = () => {
    modal.show();
}

// selector for the modal submit button and the api key
const apiInput = document.querySelector("#apiKeyInput");
const submit = document.querySelector(".modal-submit");
submit.addEventListener("click", () => {
    apiKey = apiInput.value;
});

// selector for the city selection
const citySelection = document.querySelector("#citySelect");
citySelection.addEventListener("change", () => {
    const selection = parseInt(citySelection.value);
    if (selection === 999) {
        return;
    }
    else {
        getWeather(parseInt(citySelection.value), apiKey);
    }
});