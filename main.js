// Select Elements
const option = document.querySelectorAll(".radio__label");
const formBtn = document.querySelector(".feedback__btn")


// Capture chosen option
function captureText(event) {
  console.log(event.target.innerText);
  return event.target.innerText;
};

// Change content
function changeContent(event) {
  event.preventDefault();
  
  const hide = document.querySelector(".feedback");
  const reveal = document.querySelector(".thanks");

  hide.style.display = "none"
  reveal.style.display = "block";
}

// Add Event Listener in Options
option.forEach(option => {
  option.addEventListener("click", captureText);
});

formBtn.addEventListener("click", changeContent);

// End

// const selectedOption = document.querySelector('input[type="radio"]:checked');


