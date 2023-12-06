let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let apiKey = 'cb9f1ae461c3cd5ca16fac44df3ababd'
let difGradosKelvin = 273.15
let urlIconBase = 'https://openweathermap.org/img/wn/'
let urlIconFin = '@2x.png'





document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad) {
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad) {
fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data) {
    
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperaturaCiudad = data.main.temp
    const humedadCiudad = data.main.humidity
    const iconoTempCode = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent=`La temperatura es ${Math.floor(temperaturaCiudad-difGradosKelvin)} °C`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent=`Humedad: ${humedadCiudad} %`

    const espacioIcono = document.createElement('img')
    espacioIcono.src=`${urlIconBase}${iconoTempCode}${urlIconFin}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(espacioIcono)
}


