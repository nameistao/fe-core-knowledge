const list = document.querySelector("#list");

list.addEventListener("click", (e) => {
  alert(e.target.innerText);
});
