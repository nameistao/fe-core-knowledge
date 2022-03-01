const gparent = document.querySelector(".gparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

gparent.addEventListener(
  "click",
  function (e) {
    alert("gparent capture");
  },
  { capture: true }
);

parent.addEventListener(
  "click",
  function (e) {
    alert("parent capture");
  },
  { capture: true }
);

child.addEventListener(
  "click",
  function (e) {
    alert("child capture");
  },
  { capture: true }
);
