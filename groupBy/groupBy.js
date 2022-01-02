const groupBy = (arr, func) => {
  const output = {};

  arr.forEach((elem) => {
    const key = func(elem);
    if ([key] in output) {
      output[key].push(elem);
    } else {
      output[key] = [elem];
    }
  });

  return output;
};

export default groupBy;
