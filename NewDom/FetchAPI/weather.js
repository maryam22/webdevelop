// API_URL = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=f6211bc24c258c57f7a7fba887afdd17"

// async function getData() {

//     let dataweather = await (API_URL)
//     return dataweather.json()

// }
const _editIcon = document.querySelector('._edit');
const cityName = document.querySelector('.city')
const searchBody = document.querySelector('.search')
const hourlyWeather = document.querySelector('.hourly')
let hourlyData

class WeatherApplication {
    constructor(city) {
        this.city = city;
        this.baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=f6211bc24c258c57f7a7fba887afdd17`
        this.hourlyWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=f6211bc24c258c57f7a7fba887afdd17`
    }


    getCurrentWeather() {
        fetch(this.baseUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }




    async getHourlyWeatherData() {
        let info = await fetch(this.hourlyWeather)
        let data = info.json();
        return data
    }

}

//           <div>
//<img class="hourlyIcon" src="http://openweathermap.org/img/wn/10d@2x.png" alt="">
//<span class="hours">9 AM</span>
//  </div>


function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}





_editIcon.addEventListener('click', (e) => {
    e.preventDefault();

    const inputElement = `<input type="text" class="searchcity" placeholder="Enter a city name" />`
    console.log('hello')
    _editIcon.style.display = 'none'
    cityName.style.display = 'none'
    searchBody.insertAdjacentHTML('afterbegin', inputElement);

    document.querySelector('.searchcity').addEventListener('focusout', (e) => {
        console.log('focus out testing....')
        cityName.innerHTML = document.querySelector('.searchcity').value
        let weather = new WeatherApplication(document.querySelector('.searchcity').value)

        _editIcon.style.display = "inline"; // visible
        cityName.style.display = 'inline'; // visible
        searchBody.removeChild(searchBody.children[0])
        weather.getCurrentWeather();
        weather.getHourlyWeatherData().then(res => { b
            

            while (hourlyWeather.hasChildNodes()) {
                hourlyWeather.removeChild(hourlyWeather.firstChild);
            }

                res.list.forEach(hour => {
                // console.log(hour.weather[0].main, "test")
                // let g = (c) => document.createElement(c)
                // let div = g("div");
                // let img = g("img");
                // setAttributes(img, { "class": "hourlyIcon", "src":`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`, "alt":"" })
                // let span = g("span");
                // setAttributes(span, { "class": "hours" })
                // span.innerText = hour.dt_txt
                // div.appendChild(img)
                // div.appendChild(span)
                
                // hourlyWeather.appendChild(div)
                let g = (c) => document.createElement(c)
                let ul =g("ul")
                let li =g("li");
                let img = g("img");
                setAttributes(li, { "class":"list-group-item" })
                setAttributes(img, { "class": "hourlyIcon", "src":`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`, "alt":""  })
                let span = g("span");
                setAttributes(span, { "class": "hours" })
                span.innerText = hour.dt_txt
                ul.appendChild(li);
                li.appendChild(img);
                li.appendChild(span)
                hourlyWeather.appendChild(ul)
                console.log(ul)

            });
        })
            /*<ul class="list-group">
            <li class="list-group-item">
               <img class="hourlyIcon" src="http://openweathermap.org/img/wn/10d@2x.png" alt="">
              <span class="hours">9 AM</span></li>
            <li class="list-group-item"> */




    })

})