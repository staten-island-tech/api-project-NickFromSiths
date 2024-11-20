import "../css/style.css";

async function getData() {
  //return a promise
  try {
    const response = await fetch(url, { method: "GET", headers });
    if (response.status != 200) {
      throw new Error(response);
    } else {
      //convert promise to json
      const data = await response.json();
      console.log(data);
      //unique to THIS API
    }
  } catch (error) {
    console.error("Does not work");
  }
}
getData();

console.log(response);
