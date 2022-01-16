const inputTxt = document.querySelector('.inputTxt');
var button = document.querySelector('.button');
const showData = document.querySelector('.show');

const API_Key = "dfc2e0a358f395ca3b6b4c1314c03312";

button.addEventListener('click', () => {


    const cityInput = inputTxt.value;



    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${API_Key}`)
        .then(res => res.json())
        .then(data => {

            inputTxt.value = " ";


            showData.innerHTML = `
                                <ul>
                                    <li class="desc">${data.weather[0].description}</li>
                                    <li class="city">${data.name}</li>
                                    <li class="temp">${data.main.temp}°c</li>
                                </ul>
                                `;

        });

});
