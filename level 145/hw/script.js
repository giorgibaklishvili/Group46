const apiKey = '8ef934f1917c40e29c8212118231110'; 
const city = 'London'; 
fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&days=3&aqi=no`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const location = data.location.name;
        const condition = data.current.condition.text;
        const icon = data.current.condition.icon;
        const wind = data.current.wind_kph;
        const temp = data.current.temp_c;
        const humidity = data.current.humidity

        document.querySelector("#div_img").innerHTML = `<img scr="${icon}" alt="${data.current.condition.text}">`;
        document.querySelector("#temperature").textContent = `Temperature: ${temp}°C`

        const buttons = document.querySelectorAll("#div1 button");
        buttons[0].textContent = `${humidity}%`;
        buttons[1].textContent = `${wind} kph`;

        document.querySelector("#div_img").innerHTML = `  
        <img src="${data.current.condition.icon}" alt="">
        `

        const forecast = data.forecast.forecastday;
        document.querySelector("#div4").innerHTML = `
        <p>Monday</p>
        <p>${forecast[0].day.avgtemp_c}°C</p>
        <img src="${forecast[0].day.condition.icon}" alt="${forecast[1].day.condition.text}">
        `;

        document.querySelector("#div5").innerHTML = `
        <p>Tuesday</p>
        <p>${forecast[1].day.avgtemp_c}°C</p>
        <img src="${forecast[1].day.condition.icon}" alt="${forecast[1].day.condition.text}">
        `;

        document.querySelector("#div6").innerHTML = `
        <p>Wednesday</p>
        <p>${forecast[2].day.avgtemp_c}°C</p>
        <img src="${forecast[2].day.condition.icon}" alt="${forecast[2].day.condition.text}">
        `;
        
        })
        .catch(error => console.error("Error fetching weather data:", error));