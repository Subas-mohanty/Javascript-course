const input = document.getElementById("input");
const button = document.getElementById("search-btn");

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

async function getData(cityName) {
  let promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=191bf9d0b46543dc9da173843232808&q=${cityName}&aqi=yes`
  );

  return await promise.json();
}

button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  console.log(result);
  cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
  cityTime.innerText = `${result.location.localtime}`;
  cityTemp.innerText = `${result.current.temp_c}`;
});
