const url = "https://reqres.in/api/users";

const data = {
  name: "tao",
  job: "swe",
};

const headers = new Headers();
headers.append("content-type", "application/json; charset=utf-8");

async function foo() {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers,
    });
    const obj = await response.json();
    console.log(obj);
  } catch (e) {
    console.log(e);
  }
}

foo();
