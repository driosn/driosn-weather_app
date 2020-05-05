const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async (dir) => {

    try {
        const dataLugar = await lugar.getLugarLatLng(dir);
        const dataClima = await clima.getClima(dataLugar.lat, dataLugar.lng);
        return `El clima de ${dataLugar.direccion} es de ${dataClima}`;
    } catch (e) {
        throw new Error(`No se pudo determinar el clima de ${dir}`);
    }
    
    // salida
    // El clima de XXXXXX es de XX
    // No se pudo determinar el clima de XXXXX
}

getInfo(argv.direccion)
        .then(console.log)
        .catch(console.log);