import "../css/style.css";
const DOMSelectors = {
  image: document.querySelector("#image"),
  cardHeader: document.querySelector("#title"),
  button: document.querySelector(".sub"),
  description: document.querySelector("#description"),
  container: document.querySelector(".container"),
  button: document.querySelector(".button"),
  resethtml: document.querySelector(".reset"),
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
  document.querySelector(".container").innerHTML = "";
  data.forEach((element) => {
    const specific = `<button class="country"><div class="card w-[17rem] h-[17rem] leading-loose bg-none flex flex-col items-center justify-center rounded-xl m-4 shadow-lg bg-center bg-cover ">
          <h1 class="Title font-black text-2xl">${element["name"]}</h2> 
          <h5 class="font-light ">click me</h5>
          <p id="description" class="description text-xs text-transparent">${element["iso2"]}</p> 
      </div></button>`;
       
    DOMSelectors.container.insertAdjacentHTML("beforeend", specific);
  });
}
getData();

DOMSelectors.container.addEventListener("click", function(event){
  event.preventDefault();
  const card = event.target.closest(".card");
  const name = card.querySelector(".description").textContent;
  console.log(card);
  console.log(name);
  countryData(name);
})

async function countryData(name){
  try {
    const respons = await fetch(`https://api.countrystatecity.in/v1/countries/${name}`, { method: "GET", headers });
    if (respons.status != 200) {
      throw new Error(respons);
    } 
    else {
      //convert promise to json
      const newData = await respons.json();
      console.log(newData); //unique to THIS API
      Newdata(newData);
      
    };
  } catch (error) {
    console.error("Does not work");
  }
}

function Newdata(newData){
document.querySelector(".container").innerHTML = "";
  const specific = `
  
    <button class="country"><div class=" w-[90vh] h-[70vh] leading-loose bg-none flex flex-col items-center justify-center rounded-xl m-4 shadow-lg bg-center bg-cover ">
      <h1 class="Title font-black text-2xl">${newData["name"]}</h2> 
      <p class="">Capital: ${newData["capital"]}</p> 
      <p class="">Phone Code: ${newData["phonecode"]}</p> 
      <p class="">Currency: ${newData["currency_name"]}, ${newData["currency_symbol"]}</p> 
      <p class="">Latitude: ${newData["latitude"]}   Longitude: ${newData["longitude"]}</p>
      <p class="">Region: ${newData["region"]}</p>
      <p class="">Subregion: ${newData["subregion"]}</p>

      <img src="${newData["img"]}" alt="${newData["name"]}" class="Image"></img>
      <p id="description" class="text-xs text-transparent">${newData["iso2"]}</p> 
    </div></button>`;
     
  DOMSelectors.container.insertAdjacentHTML("beforeend", specific);
}


DOMSelectors.resethtml.addEventListener("click", function(event){
  event.preventDefault();
  getData();
})



/* <div class="card w-[17rem] h-[17rem] bg-none flex flex-col items-center justify-center rounded-xl m-4 shadow-lg bg-center bg-cover ">
          <h2 class="Title">${element["name"]}</h2> 
          <p class="Description">Capital: ${element["capital"]}</p> 
          <p class="Description">Phone Code: ${element["phonecode"]}</p> 
          <p class="Description">Currency: ${element["currency"]}</p> 
          <p class="Description">Features: ${element["features"]}</p> 
          <img src="${element["img"]}" alt="${element["name"]}" class="Image"></img>
      </div> */