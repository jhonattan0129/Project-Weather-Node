const axios = require('axios')

const getLugar = async(direccion) => {
    const encodeUrl = encodeURI(direccion)
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        headers: { "x-rapidapi-key": "6ed433d250msh473509b0a98c43dp1024c5jsnefc04d2bf70e" }
    })

    const resp = await instance.get()
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }

    const data = resp.data.Results[0]
    const lugar = data.name
    const lat = data.lat
    const lng = data.lon

    return {
        lugar,
        lat,
        lng
    }
}

module.exports = {
    getLugar
}