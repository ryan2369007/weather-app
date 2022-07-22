function handleSubmit(event) {
  event.preventDefault();
  let apiKey = "da8cf311887decf6da787ca94d50a42c";
  let city = document.querySelector("#search-text-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  console.log(`${apiUrl}&appid${apiKey}`);
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  console.log(response.data.name);

  let city = document.querySelector(".city");
  city.innerHTML = response.data.name;

  let temperatureDescription = document.querySelector(".currentforecast");
  temperatureDescription.innerHTML = `${response.data.weather[0].description}`;

  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector(".currenttemp");
  temperatureElement.innerHTML = `${temperature}°F`;
}

function handlePosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  console.log(position)
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);