const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);

async function onSubmit(e) {
  try {
    e.preventDefault();
    const url = "https://reqres.in/api/users";
    const body = JSON.stringify({
      name: document.getElementById("name").value,
      job: document.getElementById("job").value,
    });
    const headers = new Headers();
    headers.append("content-type", "application/json; charset=utf-8");
    const options = { method: "POST", body, headers };
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.log(e);
  }
}
