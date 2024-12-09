import react, { Component } from 'react';
import './principal.css';


class Principal extends Component {



    render(){



        return(


            <div className = 'container-principal'>

                <div className = 'container-textoprincipal'>

                <p>Bienvenido a  <span className = 'texto-principal-gourmet'><br/>EL RINCON GOURMET</span></p>
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
                <div className="comentario comentario1">
                <h5>Juan Carlos</h5>
                <p>"¡Una experiencia inolvidable! El ambiente es acogedor y elegante, perfecto para una cena especial. Los platos no solo son deliciosos, sino que están presentados con un toque artístico que realmente impresiona.</p>
                </div>
                <div className="comentario comentario2">
                <h5>Diego Andres</h5>
                <p>La combinación perfecta entre sabores únicos y un ambiente cálido. Desde el primer bocado, se nota la calidad de los ingredientes y la pasión detrás de cada plato</p>
                </div>
                <div className="comentario comentario3">
                <h5>José Manuel</h5>
                <p>El postre fue la cereza del pastel, simplemente espectacular. ¡Una experiencia que vale la pena repetir</p>
                </div>
                <div className='comentario comentario4'>
                <h5>Camila Valentina</h5>
                <p>Un deleite para los sentidos! Desde la atención amable hasta la presentación impecable de los platos, todo fue perfecto</p>
                </div>
            </div>
            
            </div>

            
        )
    }
}


export default Principal;