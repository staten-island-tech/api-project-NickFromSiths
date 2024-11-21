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
      const data = response.json();
      console.log(data);
      cards(data);
      //unique to THIS API
    }
  } catch (error) {
    console.error("Does not work");
  }
}

function cards(data) {
  // document.querySelector(".container").innerHTML = "";
  data.forEach((element) => {
    const specific = `<div class="card"> 
          <h2 class="Title">${element["name"]}</h2> 
          <p class="Description">Price: ${element["price"]}</p> 
          <p class="Description">Sale Price: ${element["salePrice"]}</p> 
          <p class="Description">Brand: ${element["brand"]}</p> 
          <p class="Description">Features: ${element["features"]}</p> 
          <img src="${element["img"]}" alt="${element["name"]}" class="Image"></img>
      </div>`;

    DOMSelectors.container.insertAdjacentHTML("beforeend", specific);
  });
}
getData();
cards();
