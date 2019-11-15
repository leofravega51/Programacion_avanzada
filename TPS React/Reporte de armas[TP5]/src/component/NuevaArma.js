import React ,{Component} from 'react'
import uuid from 'uuid';

const stateInicial = {

    arma: {
        modelo: '',
        tipo: '',
        soldado_propietario: '',
        rango_soldado: '',
        fecha: '',
        hora:'',
        detalle_falla:''
    },
    error: false
 }




class NuevaArma extends Component {
    
    state = {...stateInicial}

       
     handleChange = e => {
        // colocar lo que el usuario escribe en el state
        this.setState({
            arma : {
                ...this.state.arma,
                [e.target.name] : e.target.value
            }
        })
   
     }
        // cuando el usuario envia el formulario
        handleSubmit = e => {
            e.preventDefault();

        //extraer los valores del state
        const { modelo, tipo, soldado_propietario, rango_soldado, fecha, hora, detalle_falla } = this.state.arma

           //validar que todos los campos esten llenos
           if(modelo === '' || tipo === '' || soldado_propietario === ''|| rango_soldado === ''|| fecha === '' || hora === '' || detalle_falla === '' )
           {
                this.setState({
                    error: true
                })

                // detener la ejecucion
                return;
           }

           // generar objeto cons los datos
           const nuevaArma = {...this.state.arma};
           nuevaArma.id = uuid();


              // agragar la cita al state de App
              this.props.crearNuevaArma(nuevaArma)

              //colocar en el state el stateInicial
              this.setState({
                  ...stateInicial
              })

        }

    render() { 

        /// extrar valor del state
        const {error} = this.state;
        return ( 
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llene el formulario para crear un nuevo reporte de arma
                    </h2>

                    {error ? <div className="alert alert-danger mt-2 mb-5 
                    text-center">Todos los campos son obligatorios</div> : null}

                <form
                onSubmit={this.handleSubmit}
                >
                    <div className="form-group row">
                        <label className="col-sm-2 col-lg-2 col-form-label">
                            Modelo</label>
                            <div className="col-sm-4 col-lg-5">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Modelo de arma"
                                name="modelo"
                                onChange={this.handleChange}
                                value={this.state.arma.modelo}
                                />
                            </div>

                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-lg-2 col-form-label">
                            Tipo</label>
                            <div className="col-sm-4 col-lg-5">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Tipo de arma"
                                name="tipo"
                                onChange={this.handleChange}
                                value={this.state.arma.tipo}
                                />
                            </div>

                    </div>

               
                    <div className="form-group row">
                        <label className="col-sm-2 col-lg-2 col-form-label">
                            Soldado propietario</label>
                            <div className="col-sm-4 col-lg-5">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre de soldado propietario"
                                name="soldado_propietario"
                                onChange={this.handleChange}
                                value={this.state.arma.soldado_propietario}
                                />
                            </div>

                    </div>
                {/*form-group */}

                <div className="form-group row">
                        <label className="col-sm-2 col-lg-2 col-form-label">
                            Rango</label>
                            <div className="col-sm-4 col-lg-5">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Rango del soldado"
                                name="rango_soldado"
                                onChange={this.handleChange}
                                value={this.state.arma.rango_soldado}
                                />
                            </div>

                    </div>
                {/*form-group */} 

                
                    <div className="form-group row">
                        <label className="col-sm-2 col-lg-2 col-form-label">
                           Fecha</label>
                            <div className="col-sm-4 col-lg-5">
                                <input
                                type="date"
                                className="form-control"
                                 name="fecha"
                                 onChange={this.handleChange}
                                 value={this.state.arma.fecha}
                                />
                            </div>
                    </div>
                 {/*form-group */} 


                 <div className="form-group row">
                        <label className="col-sm-2 col-lg-2 col-form-label">
                           Hora</label>
                            <div className="col-sm-4 col-lg-5">
                                <input
                                type="time"
                                className="form-control"
                                 name="hora"
                                 onChange={this.handleChange}
                                 value={this.state.arma.hora}
                                />
                            </div>
                    </div>
                 {/*form-group */} 

             
                    <div className="form-group row">
                        <label className="col-sm-2 col-lg-2 col-form-label">
                            Detalle de falla</label>
                            <div className="col-sm-4 col-lg-5">
                                <textarea
                                type="text"
                                className="form-control"
                                placeholder="Ingrese las fallas"
                                name="detalle_falla"
                                onChange={this.handleChange}
                                value={this.state.arma.detalle_falla}
                                />
                            </div>
                    </div>

                    <input
                    type="submit"
                    className="py-3 mt-2 btn btn-success btn-block col-md-4"
                    value="Agregar nueva arma"
                    />
                </form>  {/*form-group */} 
                
                
                
                


                </div>
            </div>
         );
    }
}
 
export default NuevaArma;