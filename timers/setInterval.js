setInterval(() => {
  console.log("1");
}, 1000);

const id = setInterval(() => {
  console.log("2");
}, 1000);

clearInterval(id);
