//Simularemos una base de datos
//BBDD empleados

let empleados = [{
    id:1,
    nombre: 'Leandro'
},{
    id:2,
    nombre:'Pedro'
},{
    id:3,
    nombre:'Juan'
}];

//BBDD Salarios
let salarios = [{
    id:1,
    salario:3000
},{
    id:2,
    salario:4000
}];


let getEmpleado = (id) => {
    
    return new Promise((resolve, reject) =>{ //La promise es una funcion que tiene dos callback, resolve y reject
        //El "resolve" se llama si la promesa es exitosa, si logra encontrar un empleado.
        //El "reject" se llama si no es exitosa, es decir, no existe un empleado en la BBDD.

    let empleadoDB = empleados.find(empleado => empleado.id === id) //barre toda la funcion sobre los empleados

    if(!empleadoDB) {
        reject(`No existe un empleado con el id ${id}`)
    }else {
        resolve(empleadoDB);
    }
})
}

getEmpleado(4).then(empleado =>{
    console.log('El empleado de BD', empleado);
    
}, (err) =>{
    console.log(err);
    
})

let getSalario = (id) => {
    return new Promise ((resolve, rejected) => {
        
        let salarioDB = salarios.find(salario => salario.id == id);

        if(!salarioDB){
            rejected(`No existe un salario asignado al id ${id}`);
        } else{
            resolve(salarioDB);
        }
    })
}

getSalario(1).then(salario => {
    console.log('El salario de dicho id es ', salario);
    }, (err) =>{
        console.log(err);
        
    }
)
