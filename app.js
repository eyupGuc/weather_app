const fetchWeather = async (name) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=605ed0a830c5efab159b66090cd503a6&units=metric`
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
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <p class="card-text">${data.weather[0].description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Temperature: ${data.main.temp}°C</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
  `;
    count++;
  } else {
    alert("you can't select more than cities");
  }
};
