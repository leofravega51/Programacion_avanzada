const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const fs = require('fs');

let weather_data;
let data = {Registros : []};


const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            descripcion: 'Direccion de la ciudad para obtener el clima: ',
            demand: true,
        }
    }).argv

/*
    Para utilizar la app, debemos ingresar en consola el siguiente comando:
    node "nombre_de_la_app.js" -d "Ubicacion a consultar"
*/


let getInfo = async (direccion) => {

    try {
        //Obtenemos las coordenadas del lugar indicado por consola
        coords = await lugar.getLugarLatLng(direccion);
        //Obtenemos la temperatura, humedad y presion basadas en la latitud y longitud del lugar
        weather_data = await clima.getClima(coords.lat, coords.lng);
        //Creamos el json que ira dentro del array de nuestro objeto
        parametros = {Localidad : argv.direccion, Temperatura : weather_data.temperatura, Presion : weather_data.presion, Humedad : weather_data.humedad}

        //Verificamos si el archivo existe
        fs.stat('database.txt', (err) =>  {

            if(err === null){ //Si el archivo existe, guardamos los datos de la nueva consulta
                let archivo = fs.readFileSync('database.txt', 'utf-8'); //Obtenemos todos los datos de database.txt
                data = JSON.parse(archivo);
                data.Registros.push(parametros); //Actualizamos el json con los nuevos datos obtenidos
                json = JSON.stringify(data);    
                fs.writeFile(path = `database.txt`, json, (err) => { //Almacenamos el json actualizado
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("Datos almacenados con exito!");
                    }
                    
                })
            } else if(err.code === 'ENOENT'){ //Si el archivo no existe, lo creamos con los datos de la primer consulta.
                data.Registros.push(parametros); //Ingresamos los datos (json) en el array "Registros" del objeto "data"
                json = JSON.stringify(data);
                fs.writeFile(path = `database.txt`, json, (err) => { //Almacenamos los datos en formato JSON
                    if(err){
                        console.log(err);
                    } else {
                        console.log("El archivo database.txt fue creado con exito!"); 
                    }
                })
                  
            } else { //Retornamos el error que se produzca
                console.log(err);
                
            }
        })
        


        return `El clima en ${coords.direccion} es de ${weather_data.temperatura}, la presion  de ${weather_data.presion} y la humedad ${weather_data.humedad}`;
    } catch (e) {
        return `No se puede determinar el clima en ${direccion} debido al siguiente error: ${e}`

    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));