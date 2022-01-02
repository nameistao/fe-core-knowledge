const clone = (source) => {
  const output = {};

  for (const key in source) {
    if (typeof source[key] === "object") {
      output[key] = clone(source[key]);
    } else {
      output[key] = source[key];
    }
  }

  return output;
};

export default clone;
