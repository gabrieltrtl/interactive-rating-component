// Select Elements // 
const option = document.querySelectorAll('input[type="radio"]');
const form = document.querySelector(".feedback__form")
const feedbackMessage = document.querySelector(".thanks__subtitle")

// Declare Variables
let optionSelected = false;
let firstButtonClick = true;

// Capture Chosen Option
function captureText(event) {
  const currentValue = event.target.value;
  optionSelected = true;
  console.log(currentValue);
  return currentValue;
};

// Change Content
function changeContent(event) {
  event.preventDefault();

  if (optionSelected) { 
    const hide = document.querySelector(".feedback");
    const reveal = document.querySelector(".thanks");
    
    hide.style.display = "none"
    reveal.style.display = "block";
    
    const selectedValue = captureText(event);

    feedbackMessage.textContent = `You selected ${selectedValue} out of 5`;
    feedbackMessage.style.display = "block" 
  } else {
    if (firstButtonClick) { // Checks if it is the first click on the button.
      window.alert("Please choose an option")
      firstButtonClick = false; // Sets the variable to false after displaying the message for the first time.
    }
  }
}

// Add Event Listener in Each Option
option.forEach(option => {
  option.addEventListener("change", captureText);
});

// Add Event Listener in Form
form.addEventListener("submit", changeContent);







