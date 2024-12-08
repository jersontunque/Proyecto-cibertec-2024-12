import react, { Component } from 'react';
import Opciones from '../../Opciones.js';
import Menu from '../../Menu.js';

class MenuPage extends Component {



    render(){

        return(

            <div>
                <Menu />
                <Opciones />
            </div>

        )
    }
}

export default MenuPage;