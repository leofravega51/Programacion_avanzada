//Nos permite ejecutar un trabajo, ya sea asincrono o sincrono
//despues de ejecutar una tarea

let empleados = [{
    id: 1,
    nombre: "Leandro",
},
{
    id: 2,
    nombre: "Pedro"
},
{
    id: 3,
    nombre: "Juan"
}]

let salarios = [{
    id:1,
    salario:3000
},
{
    id:2,
    salario: 5000
}]

let getEmpleado = (id) => {
    return new Promise ((resolve, rejected) => {
        //El resolve, se llama si la promesa es exitosa.
        //El rejected se llama si la promesa fracasa, es decir el empleado no existe.

        let empleadoDB = empleados.find(empleado => empleado.id == id);

        if(!empleadoDB){
            rejected(`No existe el empleado con el id ${id}` );
        }else{
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

