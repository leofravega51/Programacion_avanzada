const axios = require('axios');

//API KEY: f6bec82f24f252fe9df8bb82a085080b

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=f6bec82f24f252fe9df8bb82a085080b&units=metrica`);
    const temperatura = resp.data.main.temp;
    const presion = resp.data.main.pressure;
    const humedad = resp.data.main.humidity;

    return {temperatura, presion, humedad}

}

module.exports = {
    getClima
}