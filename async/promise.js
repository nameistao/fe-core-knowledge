const simplePromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(3), 1000);
});

simplePromise.then(console.log);

const simpleReject = new Promise((resolve, reject) => {
  setTimeout(() => reject("this is an error"), 1000);
});

simpleReject.then(console.log).catch(console.log);

const immediate = Promise.resolve(3);
console.log(immediate);

const chaining = new Promise((resolve, reject) => {
  setTimeout(() => resolve(3), 1000);
});

chaining
  .then((value) => value * 2)
  .then((value) => value * 2)
  .then(console.log);

const final = Promise.resolve(5);
final.then(console.log).finally(() => console.log("finally"));

Promise.all([
  new Promise((res, rej) => setTimeout(() => res(3), 3000)),
  new Promise((res, rej) => setTimeout(() => res(2), 2000)),
  new Promise((res, rej) => setTimeout(() => res(1), 1000)),
]).then((value) => console.log("all " + value));

Promise.race([
  new Promise((res, rej) => setTimeout(() => res(3), 3000)),
  new Promise((res, rej) => setTimeout(() => res(2), 2000)),
  new Promise((res, rej) => setTimeout(() => res(1), 1000)),
]).then((value) => console.log("race " + value));

Promise.any([
  new Promise((res, rej) => setTimeout(() => res(3), 3000)),
  new Promise((res, rej) => setTimeout(() => res(2), 2000)),
  new Promise((res, rej) => setTimeout(() => rej(1), 1000)),
]).then((value) => console.log("any " + value));
