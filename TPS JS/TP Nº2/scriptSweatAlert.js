function validarCampos(){

    

    var nombre = document.getElementById("firstname").value;
    var apellido = document.getElementById("lastname").value;
    var direccion = document.getElementById("address").value;
    var telefono = document.getElementById("telephone").value;
    var email = document.getElementById("email").value;    


    if(nombre.length == 0 || apellido.length == 0 || direccion.length == 0 || telefono.length == 0 || email.length == 0){
       swal({
            title: "Error!",
            text: "Complete todos los campos para proseguir!",
            icon: "error",
            button: true,
            timer: 10000
          })
    }else{
        swal({
            title: "Envio exitoso!",
            text: "Sus datos han sido enviados correctamente!",
            icon: "success",
            button: true,
            timer: 10000
          })
    }
    
}

function cancelarEnvio(){
    swal({
        title: "Esta seguro de cancelar la operacion?",
        text: "Si decide cancelar el envio, los datos del formulario se borraran automaticamente.",
        icon: "warning",
        buttons: ["Aceptar", "Cancelar"],
        dangerMode: true,
        timer: 10000
      })
      .then((willDelete) => {
        if (willDelete) {} 
        else {
            document.getElementById("myForm").reset();

            swal({
                title: "Envio cancelado!",
                text: "Los datos del formulario han sido borrados.",
                button: false,
                timer: 2000
            });
        }
      });
}