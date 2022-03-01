const body = document.body;

const button = document.querySelector("button");

body.addEventListener("click", function (e) {
  alert(this);
});

button.addEventListener("click", function (e) {
  alert(this);
});
