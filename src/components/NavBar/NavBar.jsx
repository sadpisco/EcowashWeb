import React from 'react';
import { Link } from 'react-router-dom'

export default function NavBar(){
    const logo = '';
    return(
        <div className = "flex flex-row items-center justify-around">
            <section>
            <img src = {logo} alt = "Logo Ecowash"/>
            </section>
            <section className = "">
                <Link to = "/" className = "text-black">Home</Link>
                <Link to = "/services" className = "text-black">Servicios</Link>
                <Link to = "/nosotros" className = "text-black">Nosotros</Link>
                <Link to = "/contact" className = "text-black">Contacto</Link>
                <Link to = "/booking" className = "text-black">Reservar Cita</Link>
            </section>
        </div>
    );
};