const fetchWeather = async () => {
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=ankara&appid=605ed0a830c5efab159b66090cd503a6"
  );
  const data = await res.json();
  console.log(data);
};

fetchWeather();
