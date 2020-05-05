const axios = require('axios');

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0b3cac53dcda014aefe743a5b8bb1616&units=metric`)

    return resp.data.main.temp;    
}

module.exports = {
    getClima
}