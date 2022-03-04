setTimeout(() => {
  console.log("1");
}, 1000);

const id = setTimeout(() => {
  console.log("2");
}, 1000);

clearTimeout(id);
