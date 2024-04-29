var feedbackForm = document.querySelector('.feedback__form');
var feedbackDiv = document.querySelector('.feedback');
var thanksDiv = document.querySelector('.thanks');

function handleSubmit(event) {
  event.preventDefault();

  var feedbackValue = document.querySelector('input[name="feedback"]:checked');

  if (feedbackValue) {
    feedbackDiv.classList.toggle('hidden');
    thanksDiv.classList.toggle('hidden');
    
    var selectedValue = feedbackValue.value;

    document.querySelector('.thanks__subtitle').textContent = `You selected ${selectedValue} out of 5`;

  } else {
    window.alert("please choose an option.");
  }
}


feedbackForm.addEventListener('submit', handleSubmit);

























/*

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


*/ 




