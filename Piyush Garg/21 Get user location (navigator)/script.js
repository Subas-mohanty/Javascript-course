const btnLocation = document.getElementById("btn-location");
const showLocation=document.getElementById('show-location')


// this is to fetch the data from weather API
async function getData(lat, long) {
  let promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=191bf9d0b46543dc9da173843232808&q=${lat},${long}&aqi=yes`
  );
  return promise.json();
}
async function gotLocation(position) {
  const result = await getData(position.coords.latitude, position.coords.longitude);
  const country=result.location.country;
  const region=result.location.region;
  const city=result.location.name;
//   const temp;
// create divs for other variable in html then put them in the page
  showLocation.innerText=`Country: ${country}`;
  console.log(result);
}
function failedLocation() {
  console.log("There is some issue");
}
btnLocation.addEventListener("click", async () => {
  navigator.geolocation.getCurrentPosition(gotLocation, failedLocation);
});
