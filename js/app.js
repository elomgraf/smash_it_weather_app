const api = {
    key: "3d08727ecd5c18ab0b011823de8c5a06",
    base: "https://api.openweathermap.org/data/2.5/",
};

const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);

function setQuery(event) {
    if (event.keyCode === 13) {
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((weather) => {
            return weather.json();
        })
        .then(displayResults);
}

function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector(".location .city");
    let now = new Date();
    let date = document.querySelector(".location .date");
    let temp = document.querySelector(".current .temp");
    let weather_des = document.querySelector(".weather");
    let hilow = document.querySelector(".hi-low");
    let tempIcon = document.getElementById("icon").src;

    city.textContent = `${weather.name}, ${weather.sys.country}`;
    date.textContent = dateBuilder(now);
    temp.textContent = `${Math.round(weather.main.temp)}°C`;
    weather_des.textContent = weather.weather[0].description;
    hilow.textContent = `${Math.round(weather.main.temp_min)}°C / ${Math.round(
    weather.main.temp_max
  )}°C `;
    document.getElementById("icon").src = `img/icons/${weather.weather[0].icon}.png`;
}

function dateBuilder(d) {
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thurday",
        "Friday",
        "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;

}

/*
fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
.then((weather) => {
    return weather.json();
}).then((data) => {
    console.log(data);
});
*/