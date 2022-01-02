const map = (arr, func) => {
  let output = [];

  arr.forEach((elem, index) => {
    output.push(func(elem));
  });

  return output;
};
