const chunk = (arr, size = 1) => {
  const output = [];
  const temp = [];
  arr.forEach((elem, index) => {
    temp.push(elem);
    if (temp.length === size || index === arr.length - 1) {
      output.push([...temp]);
      temp.length = 0;
    }
  });

  return output;
};
