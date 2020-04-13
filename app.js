const { argv } = require('./config/yargs')
const { getLugar } = require('./lugar/lugar')
const { getClima } = require('./clima/clima')

const getInfo = async(direccion) => {
    try {
        const coordenadas = await getLugar(direccion)
        const temperatura = await getClima(coordenadas.lat, coordenadas.lng)
        return `El Temperatura en ${coordenadas.lugar} es de ${temperatura}°`
    } catch (e) {
        throw new Error(`No se pude determinar el clima de ${ direccion }`)
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)