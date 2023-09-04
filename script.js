let url = "https://api.openweathermap.org/data/2.5/weather";
let apiKey = "ba29628490ebc547364d1b756d9cd850";

let aCelcius = 273.15;

//let city = addEventListener



document.getElementById('botonBusqueda').addEventListener('click',()=>{
    const city = document.getElementById('ciudadEntrada').value
    if(city){
        fetchDatosClima(city)
    }
})
function fetchDatosClima(city){
    fetch(`${url}?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(response => mostrarDatosClima(response))

}

function mostrarDatosClima(response){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ' '
    const cityName = response.name
    const CountryName = response.sys.country
    const temperature = response.main.temp
    const feels = response.main.feels_like
    const description = response.weather[0].description
    const icono = response.weather[0].icon

    const cityTitle = document.createElement('h2')
    cityTitle.textContent = `${cityName}, ${CountryName}`

    const tempinfo = document.createElement('h3')
    tempinfo.textContent = ` ${Math.floor(temperature-aCelcius)}°C`

    const feel = document.createElement('h5')
    feel.textContent = `Feels like ${Math.floor(feels-aCelcius)}°C`

    const iconDescription = document.createElement('img')
    iconDescription.src = `https://openweathermap.org/img/wn/${icono}@2x.png`
    const dataDescription = document.createElement('p')
    dataDescription.textContent = `About the weather : ${description}`

    divDatosClima.appendChild(cityTitle)
    divDatosClima.appendChild(tempinfo)
    divDatosClima.appendChild(feel)
    divDatosClima.appendChild(iconDescription)
    divDatosClima.appendChild(dataDescription)
    
}
