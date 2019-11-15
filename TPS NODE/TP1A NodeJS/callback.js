

let getUsuarioById = (id, callback) => {
    let usuario = { // suponemos que traemos de una BBDD
        nombre: "Leandro",
        id
    }

    if(id === 20) {
        callback(`El usuario con id ${id}, no existe en la base de datos.`)
    }else {
        callback(null, usuario);
    }

}

getUsuarioById(22, (err, usuario) => { //Si cambiamos el ID nos devuelve el nombre de usuario de base de datos. Ej: Leandro.

    if(err) {
        return console.log(err);
    }

    console.log('Usuario de base de datos', usuario);
    
})