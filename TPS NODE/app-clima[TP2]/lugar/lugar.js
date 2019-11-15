const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const instance = axios.create({

        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${dir}`,
        headers: { 'x-rapidapi-key': '7d1243865bmsh039c41f506b55e3p169457jsn33089d79f664' }
    })

    const resp = await instance.get();
    if (resp.data.Results.length == 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }


    const data = resp.data.Results[0];
    const direccion = data.name
    const lat = data.lat
    const lng = data.lon

    return {
        direccion,
        lat,
        lng
    }
}
module.exports = {
    getLugarLatLng
}