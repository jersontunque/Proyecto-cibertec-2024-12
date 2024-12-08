import react, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
class Header extends Component {



    render() {

        return(


            <div className='container-header'>
                <Link to="/">Inicio</Link>
                <Link to="menu">Menu</Link>
                <Link to="reserva">Reserva</Link>

            </div>
        )
    }
}

export default Header;