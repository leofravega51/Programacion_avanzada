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

let salarios = [{
    id:1,
    salario:3000
},{
    id:2,
    salario:4000
}];


let getEmpleado = async (id) => {

    let empleadoDB = empleados.find(empleado => empleado.id ===id)

    if(!empleadoDB) {
        throw new Error(`No existe el empleado con el ID ${id}`)
    }else {
        return empleadoDB;
    }
}

let getSalario = async (id) => {

    let salarioDB = salarios.find(salario => salario.id === id)

    if(!salarioDB){
        throw new Error(`No existe el salario asociado al id ${id}`)
    }else {
        return salarioDB;
    }
}

getSalario(2).then(salario => {
    console.log('El salario de dicho id es ', salario);
    }, (err) => {
        console.log(err);
        
})