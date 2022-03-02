const main = document.querySelector("main");

console.log(Array.from(main.classList));

main.classList.add("class4");

console.log(Array.from(main.classList));

main.classList.remove("class4");

console.log(Array.from(main.classList));

main.classList.toggle("class1");

console.log(Array.from(main.classList));
