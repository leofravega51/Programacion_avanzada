import React, {Component} from 'react';
import './bootstrap.min.css'

import Header from './component/Header'
import NuevaArma from './component/NuevaArma';
import ListaArmas from './component/ListaArmas';


class App extends Component  {


  state = {
    armas : []
  }

  //Cuando la aplicacion se carga
  componentDidMount(){
    const armasLs = localStorage.getItem('armas')
    if(armasLs){
      this.setState({
        armas: JSON.parse(armasLs)
      })
    }
  }

  //Cuando eliminamos o agregamos una nueva cita
  componentDidUpdate(){
    localStorage.setItem('armas', JSON.stringify(this.state.armas))
  }

  crearNuevaArma = datos => {
    //console.log(datos);
    //copiar el state actual
    const armas = [...this.state.armas, datos]

    // agregar el nuevo state
    this.setState({
      armas
    })
    
  }

  //elimina las citas del state
  eliminarArma = id =>{
    const armasActuales = [...this.state.armas]
    const armas = armasActuales.filter(arma => arma.id !== id)
    this.setState({
      armas
    })
    
  }

  render() {

    return (

      <div className="container">

        <Header 
        />
        <NuevaArma
        crearNuevaArma={this.crearNuevaArma}
        />

        <ListaArmas
          armas = {this.state.armas}
          eliminarArma = {this.eliminarArma}
         />

      </div>
        
    );
  }
 

}

export default App;
