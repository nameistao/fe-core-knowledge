const list = document.querySelector("ul");

const one = document.createElement("li");
one.textContent = "one";
list.append(one);

const two = document.createElement("li");
two.textContent = "two";
list.prepend(two);

const three = document.createElement("li");
three.textContent = "three";
two.before(three);

const four = document.createElement("li");
four.textContent = "four";
one.after(four);
