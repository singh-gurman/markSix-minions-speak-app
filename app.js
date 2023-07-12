var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#output-text");

var apiUrl = "https://api.funtranslations.com/translate/minion.json";

function fullUrl(text) {
  return apiUrl + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("Error occured: " + error);
  alert("This server is not responding, try again later!");
}

function styleOutputBox() {
  outputText.style.background = "#fbde6b";
  outputText.style.border = "0.3rem solid #375b7d";
}

function clickHandler() {
  var enteredInput = inputText.value;

  fetch(fullUrl(enteredInput))
    .then((response) => response.json())
    .then((json) => (outputText.innerText = json.contents.translated))
    .catch(errorHandler);
  styleOutputBox();
}

btnTranslate.addEventListener("click", clickHandler);
