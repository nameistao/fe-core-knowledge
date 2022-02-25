const list = document.querySelector("#list");
const fragment = new DocumentFragment();
const movies = ["mummy", "avengers", "apollo 13", "pet semetary"];
movies.forEach((movie) => {
  let li = document.createElement("li");
  li.innerText = movie;
  fragment.append(li);
});
list.append(fragment);
