import React from 'react';

const Arma = ({arma, eliminarArma}) => (

    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{arma.modelo}</h3>
            <p className="card-text">
            <span>Soldado propietario</span> {arma.soldado_propietario}</p>
            <p><span>Rango</span> {arma.rango_soldado}</p>
           <p><span>Fecha</span> {arma.fecha}</p>
          <p><span>Hora</span> {arma.hora}</p>
          <p><span>Detalle de fallas</span> {arma.detalle_falla}</p>

          <button className="btn btn-danger" onClick={ ()=> eliminarArma(arma.id) }>
            Borrar &times;
          </button>
        </div>

    </div>
)

export default Arma;