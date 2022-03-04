const baseUrl = "https://reqres.in/api/users";
const url = new URL(baseUrl);
url.searchParams.set("page", "2");

//then
const response = fetch(url);
response
  .then((res) => res.text())
  .then(console.log)
  .catch(console.log);

//async await
async function foo() {
  try {
    const response = await fetch(url);
    console.log(response.headers.get("content-type"));
    console.log(response.status);
    console.log(response.ok);
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.log(e);
  }
}

foo();
