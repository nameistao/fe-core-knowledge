const val = document.getElementById("val");
const start = document.getElementById("start");
const stop = document.getElementById("stop");

let id;

start.addEventListener("click", () => {
  startFunc();
});

stop.addEventListener("click", () => {
  stopFunc();
});

function startFunc() {
  val.textContent++;
  id = requestAnimationFrame(startFunc);
}

function stopFunc() {
  cancelAnimationFrame(id);
}
