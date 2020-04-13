const axios = require('axios')

const getClima = async(lat, lng) => {
    const key = '8b5433185cf201fd2a5d344f8a10ae50'
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`)
    return resp.data.main.temp
}

module.exports = {
    getClima
}