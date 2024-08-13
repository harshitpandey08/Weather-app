// Data
// Variable to store the elements
// Function to get the data from the weather app
// Manipulate the variable of aready created elemtent 

let data;

const inputBox = document.getElementById("inputBox");
const CountryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const CityName = document.getElementById("cityName");
const windSpeed = document.getElementById("windSpeed");
const humidity = document.getElementById("humidity");
const Temperature = document.getElementById("Temperature");
const logoImage = document.getElementById("logoImage");
const WeatherStatus = document.getElementById("WeatherStatus");

const getData = async (event) => {
  event.preventDefault(); //it help in serach box thing not to disappear
  if(!inputBox.value){
    return alert("please enter the city name");
  }

  const city = inputBox.value;
  //fetch
  const fetchData = await fetch(`http://api.weatherapi.com/v1/current.json?key=8a6d7cda082f498fa8e121820241308&q=${city}`);

  const orgData = await fetchData.json();
  data = orgData;
  console.log(data );
  
  // Displaying the data in html
  CountryName.innerHTML = data.location.country;
  stateName.innerHTML = data.location.region;
  CityName.innerHTML = data.location.name;

  //...
  windSpeed.innerHTML = data.current.wind_kph;
  Temperature.innerHTML = data.current.temp_c;
  humidity.innerHTML = data.current.humidity;
  logoImage.src = data.current.condition.icon;
  WeatherStatus.innerHTML = data.current.condition.text;
};
