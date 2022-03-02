const allElems = Array.from(document.querySelectorAll("*"));

console.log(allElems);

const listItems = allElems.filter((elem) => {
  return elem.matches("li");
});

console.log(listItems);
