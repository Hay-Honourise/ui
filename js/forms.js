const messageBox = document.getElementById("messageBox");
const openMessageBoxButton = document.getElementById("openMessageBoxButton");
const cancelButton = document.getElementById("cancelButton");
const proceedButton = document.getElementById("proceedButton");

openMessageBoxButton.addEventListener("click", function() {
  messageBox.classList.remove("Proceed");
});

cancelButton.addEventListener("click", function() {
  messageBox.classList.add("Proceed");
});

proceedButton.addEventListener("click", function() {
  // Perform the desired action when the "Proceed" button is clicked
  console.log("Proceed button clicked");
  messageBox.classList.add("Proceed");
});
