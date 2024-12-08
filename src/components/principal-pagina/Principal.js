import react, { Component } from 'react';
import './principal.css';


class Principal extends Component {



    render(){



        return(


            <div className = 'container-principal'>

                <div className = 'container-textoprincipal'>

                <p>Bienvenido a  <span className = 'texto-principal-gourmet'><br/> El Rincon Gourmet</span></p>
                <p>Donde cada plato cuenta una historia<br/> y cada sabor es un viaje</p>
                <img src='/imagenes/principalpagina1.jpg'/>
                </div>

                <div className="container-tarjetas">
                    <div className = 'tarjeta1 tarjeta'>
                        <p>El Rincon Gourmet ofrece un ambiente moderno y acogedor, ideal para cualquiera ocasión.Con un diseño elegante y una decoración que mezcla lo clásico con toques contemporáneos.</p>
                        <img />
                    </div>

                    <div className = 'tarjeta2 tarjeta'>
                        <p>El establecimiento se encuentra en Lima, cerca del Parque Kennedy, contiene estacionamiento y varios servicios de transporte publico cercanos</p>
                        <img/>
                    </div>

                </div>
            <div className="container">
                <div>

                </div>
            </div>

            <div className="container-comentarios">
                
            </div>
            
            </div>
        )
    }
}


export default Principal;