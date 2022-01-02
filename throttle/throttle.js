const throttle = (func, delay) => {
  let last;
  let id;

  return (...args) => {
    clearTimeout(id);
    if (last == null || Date.now() - last > delay) {
      func(...args);
      last = Date.now();
    } else {
      id = setTimeout(() => {
        func(...args);
        last = Date.now();
      }, Date.now() - last + delay);
    }
  };
};
