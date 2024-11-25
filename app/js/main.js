import "../css/style.css";
const DOMSelectors = {
  image: document.querySelector("#image"),
  cardHeader: document.querySelector("#title"),
  button: document.querySelector(".sub"),
  description: document.querySelector("#description"),
  container: document.querySelector(".container"),
};

const url = "https://api.countrystatecity.in/v1/countries/";

const headers = {
  "X-CSCAPI-KEY": "MVB6MjhnMDB6OUtPTU9DR0pGUUxsYUl4YXFaNXhnSXVDbGk5VGVYcA==",
};

async function getData() {
  //return a promise
  try {
    const response = await fetch(url, { method: "GET", headers });
    if (response.status != 200) {
      throw new Error(response);
    } else {
      //convert promise to json
      const data = await response.json();
      console.log(data); //unique to THIS API
      cards(data);
    }
  } catch (error) {
    console.error("Does not work");
  }
}

function cards(data) {
  // document.querySelector(".container").innerHTML = "";
  data.forEach((element) => {
    const specific = `<div class="card bg-white shadow-lg rounded-lg p-4 flex flex-col items-center w-72 h-96">
          <h2 class="Title">${element["name"]}</h2> 
          <p class="Description">Capital: ${element["capital"]}</p> 
          <p class="Description">Phone Code: ${element["phonecode"]}</p> 
          <p class="Description">Currency: ${element["currency"]}</p> 
          <p class="Description">Features: ${element["features"]}</p> 
          <img src="${element["img"]}" alt="${element["name"]}" class="Image"></img>
      </div>`;

    DOMSelectors.container.insertAdjacentHTML("beforeend", specific);
  });
}
getData();
