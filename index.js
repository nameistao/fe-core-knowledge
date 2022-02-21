const main = document.querySelector("main");
console.log(main);

const aboutButton = document.getElementById("aboutButton");
const skillsButton = document.getElementById("skillsButton");
const projectsButton = document.getElementById("projectsButton");

aboutButton.addEventListener("click", () => {
  main.textContent = "";

  const work = document.createElement("p");
  const workBold = document.createElement("strong");
  const workLink = document.createElement("a");
  workLink.href = "https://fabric.inc/";
  workLink.rel = "noopener noreferrer";
  workLink.target = "_blank";
  workLink.append("fabric");
  workBold.append(workLink);
  work.append(
    "my name is tao luo, and i'm a software engineer at ",
    workBold,
    "."
  );

  main.append(work);

  const education = document.createElement("p");
  const educationBold = document.createElement("strong");
  const educationLink = document.createElement("a");
  educationLink.href = "https://www.usc.edu/";
  educationLink.rel = "noopener noreferrer";
  educationLink.target = "_blank";
  educationLink.append("usc");
  educationBold.append(educationLink);
  education.append(
    "previously, i studied computer science and business at ",
    educationBold,
    "."
  );

  main.append(education);
});

skillsButton.addEventListener("click", () => {
  main.textContent = "";

  const languageHeader = document.createElement("strong");
  languageHeader.innerText = "languages";
  main.append(languageHeader);
  const languages = document.createElement("p");
  languages.append("javascript, typescript, go, java, python");
  main.append(languages);

  const frontEndHeader = document.createElement("strong");
  frontEndHeader.innerText = "front end";
  main.append(frontEndHeader);
  const frontEnd = document.createElement("p");
  frontEnd.append(
    "react, redux, next, svelte, web components, wasm, css/sass, html"
  );
  main.append(frontEnd);

  const databasesHeader = document.createElement("strong");
  databasesHeader.innerText = "database";
  main.append(databasesHeader);
  const databases = document.createElement("p");
  databases.append("mongodb, redis, mysql, dynamodb");
  main.append(databases);

  const technologiesHeader = document.createElement("strong");
  technologiesHeader.innerText = "technologies";
  main.append(technologiesHeader);
  const technologies = document.createElement("p");
  technologies.append(
    "graphql, apollo, docker, elasticsearch, terraform, aws, datadog"
  );
  main.append(technologies);

  const testingHeader = document.createElement("strong");
  testingHeader.innerText = "testing";
  main.append(testingHeader);
  const testing = document.createElement("p");
  testing.append("jest, testing library, cypress");
  main.append(testing);
});

projectsButton.addEventListener("click", () => {
  main.textContent = "";

  const pomokanban = document.createElement("a");
  pomokanban.href = "https://www.pomokanban.com/";
  pomokanban.rel = "noopener noreferrer";
  pomokanban.target = "_blank";
  const pomokanbanText = document.createElement("p");
  pomokanbanText.append("pomokanban");
  pomokanban.append(pomokanbanText);
  main.append(pomokanban);

  const restaurantRec = document.createElement("a");
  restaurantRec.href = "https://www.restaurantrec.xyz/";
  restaurantRec.rel = "noopener noreferrer";
  restaurantRec.target = "_blank";
  const restaurantRecText = document.createElement("p");
  restaurantRecText.append("restaurant recommender");
  restaurantRec.append(restaurantRecText);
  main.append(restaurantRec);

  const chessPuzzles = document.createElement("a");
  chessPuzzles.href = "https://chesstutor.pythonanywhere.com/";
  chessPuzzles.rel = "noopener noreferrer";
  chessPuzzles.target = "_blank";
  const chessPuzzlesText = document.createElement("p");
  chessPuzzlesText.append("chess puzzles");
  chessPuzzles.append(chessPuzzlesText);
  main.append(chessPuzzles);
});
