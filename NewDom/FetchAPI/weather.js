API_URL = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=f6211bc24c258c57f7a7fba887afdd17"

async function getData() {

    let dataweather = await (API_URL)
    return dataweather.json()

}


