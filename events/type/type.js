const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  alert(e.type);
});

button.addEventListener("mouseenter", (e) => {
  alert(e.type);
});
