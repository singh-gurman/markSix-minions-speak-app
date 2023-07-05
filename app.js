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

function responseHandler() {
  var enteredInput = inputText.value;

  fetch(fullUrl(enteredInput))
    .then((response) => response.json())
    .then((json) => (outputText.innerText = json.contents.translated))
    .catch(errorHandler);
}

function clickHandler() {
  responseHandler();
}

btnTranslate.addEventListener("click", clickHandler);
