function getWeather() {

    let city = document.getElementById("city").value.toLowerCase();

    if(city === "") {
        alert("Please enter city name");
        return;
    }

    document.getElementById("weatherBox").style.display = "block";

    if(city === "chennai"){
        showWeather("Chennai", "32°C", "Sunny", "Humidity: 65%", "Wind: 10 km/h");
    }
    else if(city === "mumbai"){
        showWeather("Mumbai", "30°C", "Cloudy", "Humidity: 70%", "Wind: 8 km/h");
    }
    else if(city === "delhi"){
        showWeather("Delhi", "28°C", "Haze", "Humidity: 60%", "Wind: 12 km/h");
    }
    else if(city === "bangalore"){
        showWeather("Bangalore", "25°C", "Rainy", "Humidity: 75%", "Wind: 9 km/h");
    }
    else{
        showWeather(city.toUpperCase(), "29°C", "Partly Cloudy", "Humidity: 68%", "Wind: 7 km/h");
    }
}

function showWeather(city, temp, condition, humidity, wind){
    document.getElementById("cityName").innerText = city;
    document.getElementById("temp").innerText = temp;
    document.getElementById("condition").innerText = condition;
    document.getElementById("humidity").innerText = humidity;
    document.getElementById("wind").innerText = wind;
}