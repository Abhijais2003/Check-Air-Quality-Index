const inputCityBox = document.getElementById("input-city");
const searchBtn = document.getElementById("search-city-btn");
const cityName = document.querySelector(".cityname");
const imgAirQulityIndex = document.getElementById("airQualityIndexImg");
const airQuilityIndexBox = document.querySelector(".air-qulity-index");
const goodOrBad = document.getElementById("goodOrBad");
const outputContainer = document.querySelector(".output-container");

let city;

function fetchDataFromApi(value) {
  const url = `https://api.waqi.info/feed/${value}/?token=`;
  const apiKey = "e17042cf95c3622085e880224fda566dd7165ef8";

  fetch(url + apiKey)
    .then((res) => {
      return res.json();
    })
    .then((data) => setDataToDom(data))
    .catch((error) => console.error("Error is the in Api Server" + error));
}

searchBtn.addEventListener("click", () => {
  cleanInputValue();
});

function cleanInputValue() {
  if (inputCityBox.value !== "") {
    const value = inputCityBox.value.trim();
    city = value;
    inputCityBox.value = "";
    fetchDataFromApi(value);
  }
}

function clearIfExisBefore() {
  const existingImage = document.getElementById("airQualityIndexImg");
  const div = document.querySelector(".air-qulity-index");
  if (existingImage) {
    outputContainer.removeChild(existingImage);
  }
  if (div) {
    outputContainer.removeChild(div);
  }
}

function setDataToDom(data) {
  clearIfExisBefore();
  if (data && data.data && data.data.city && data.data.city.name) {
    const cityNameOnly = city;
    // console.log(city);
    const airQuilityIndex = Number(data.data.aqi);
    cityName.textContent = cityNameOnly;
    cityName.classList.add("cityname");

    // console.log(airQuilityIndex);
    let img = document.createElement("img");
    img.id = "airQualityIndexImg";
    img.width = 100;
    img.height = 100;

    // div and span
    const div = document.createElement("div");
    div.classList.add("air-qulity-index");
    const span = document.createElement("span");
    span.id = "goodOrBad";
    if (airQuilityIndex > 0 && airQuilityIndex <= 50) {
      img.setAttribute("src", "img/good.gif");
      div.textContent = `Air Quality Index of ${city} is ${airQuilityIndex}.`;
      span.textContent = "Very Good";
      span.style.color = "green";
    } else if (airQuilityIndex > 50 && airQuilityIndex <= 100) {
      img.setAttribute("src", "img/fair.gif");
      div.textContent = `Air Quality Index of ${city} is ${airQuilityIndex}.`;
      span.textContent = "Good";
      span.style.color = "yellow";
    } else if (airQuilityIndex > 100 && airQuilityIndex <= 150) {
      img.setAttribute("src", "img/moderate.gif");
      div.textContent = `Air Quality Index of ${city} is ${airQuilityIndex}.`;
      span.textContent = "Moderate";
      span.style.color = "blue";
    } else if (airQuilityIndex > 150 && airQuilityIndex <= 300) {
      img.setAttribute("src", "img/poor.gif");
      div.textContent = `Air Quality Index of ${city} is ${airQuilityIndex}.`;
      span.textContent = "Poor";
      span.style.color = "pink";
    } else if (airQuilityIndex > 300) {
      img.setAttribute("src", "img/veryPoor.gif");
      div.textContent = `Air Quality Index of ${city} is ${airQuilityIndex}.`;
      span.textContent = "Very Bad";
      span.style.color = "red";
    }
    outputContainer.appendChild(img);
    outputContainer.appendChild(div);
    div.appendChild(span);
  } else {
    const cityname = document.querySelector(".city");
    if (cityname) {
      cityname.textContent = `${city} is not found`; // Update the text content
      cityname.classList.remove("cityname");
    } else {
      console.error("City name element not found in the DOM");
    }
  }
}
