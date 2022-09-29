const fetchWeather = async (name) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=e815a95d20a585101c219591fd494992&units=metric`
  );
  const data = await res.json();
  //   console.log(data);
  updateDOM(data);
};

const input = document.querySelector(".city-search");
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  console.log(input.value);
  fetchWeather(input.value);
});

let count = 1;

const updateDOM = (data) => {
  if (count < 4) {
    console.log(data);
    const rowDiv = document.querySelector(".row");

    rowDiv.innerHTML += `
  <div class="card mx-auto" style="width: 18rem;">
  <img src="${
    "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x" + ".png"
  }" class="card-img-top" alt="...">
  <div class="card-body text-center">
    <h5 class="card-title">${data.name}</h5>
    <p class="card-text">${data.weather[0].description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Temperature: ${data.main.temp}°C</li>
    <li class="list-group-item">Humidity: %${data.main.humidity}</li>
    <li class="list-group-item">Pressure: ${data.main.pressure} hPa</li>
  </ul>
 
  `;
    count++;
  } else {
    alert("you can't select more than cities");
  }
};
