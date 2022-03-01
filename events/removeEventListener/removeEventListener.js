const buttons = Array.from(document.querySelectorAll("button"));

function foo() {
  alert("clicked");
}

buttons[0].addEventListener("click", foo);

buttons[1].addEventListener("click", () => {
  buttons[0].removeEventListener("click", foo);
});
