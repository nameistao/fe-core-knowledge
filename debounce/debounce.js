const debounce = (func, wait) => {
  let id;

  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => func(...args), wait);
  };
};
