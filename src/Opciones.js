import React from "react";
import './App.css';



const Opciones = () => {
  const comida = [
    {
      id: 1,
      image: "/imagenes/menu1.jpg",  
      description: "Papa a la huancaina, Valor 20 soles",
      
    },
    {
      id: 2,
      image: "/imagenes/menu2.jpeg",  
      description: "Lomo saltado, Valor 30 soles",
    },
    {
      id: 3,
      image: "/imagenes/menu3.jpeg",  
      description: "Cuy frito, Valor 35 soles",
    },
    {
      id: 3,
      image: "/imagenes/menu4.jpeg",  
      description: "Pollo al horno, Valor 15 soles",
    },
    
  ];

  return (
    <div className="menu">
      <div className="botones">
        <button>INICIO</button>
        <button>INICIO</button>
        <button>INICIO</button>
        <button>INICIO</button>
      </div>

      <div className="content">
        {comida.map((item) => (
          <div key={item.id} className="item">
            <img src={item.image} alt={item.description} className="imagenes" />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Opciones;
