//async without await
async function foo() {
  const promise = new Promise((res, rej) => {
    setTimeout(() => res(3), 1000);
  });
  promise.then(console.log);
}
foo();

//async with await
async function bar() {
  const promise = new Promise((res, rej) => {
    setTimeout(() => res(3), 1000);
  });
  const value = await promise;
  console.log(value);
}
bar();

//async with return
async function baz() {
  return 5;
}

baz().then(console.log);
