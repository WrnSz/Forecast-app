let now = new Date();
function changeTime(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let finalTime = `${day} ${hour}:${minutes}`;
  return finalTime;
}

let h2 = document.querySelector("#time");
h2.innerHTML = changeTime(now);

function showTemperature(response) {
  let temperature = response.data.main.temp;
  let temperatureElement = document.querySelector("#real-data");
  temperatureElement.innerHTML = `${Math.round(temperature)}°C`;
}

function citySearch(event) {
  event.preventDefault();
  let input = document.querySelector("#formInput");
  let changeCity = document.querySelector("#city");
  changeCity.innerHTML = input.value;
  let unit = "metric";
  let apiKey = "41d36454e5f3ee2db06d8969a9b290b7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=${unit}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

let seachForm = document.querySelector("#button");
seachForm.addEventListener("click", citySearch);
