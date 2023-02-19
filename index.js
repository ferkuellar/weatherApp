const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () =>{

    const APIKey ='127a31f4cd798086b6505655f562a16e';
    const city = document.querySelector('.serach-box input').value;

    if (city === '')
        return;

        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`).then(response => response.jason()).then(json => {

        if(json.cod === '404'){
            container.style.height = '404px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            return;
        }
        
        error404.style.display = 'none';
        error404.classList.remove('fadeIn');

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-box .humidity span');
        const wind = document.querySelector('.weather-box .wind span');

        switch(json.weather[0].main){
            case 'Clear':
                image.src = 'img/clear.png';

        }

        })

})

