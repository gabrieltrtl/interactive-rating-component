const option = document.querySelectorAll(".radio__label");
const formBtn = document.querySelector(".feedback__btn")

function captureText(event) {
  return event.target.innerText;
} 

function changeContent() {
  
  const hide = document.querySelector(".feedback");
  const reveal = document.querySelector(".thanks");

  hide.classList.add("hide");
  reveal.classList.add("reveal");
}

option.forEach(option => {
  option.addEventListener("click", captureText);
});

formBtn.addEventListener("click", changeContent);


