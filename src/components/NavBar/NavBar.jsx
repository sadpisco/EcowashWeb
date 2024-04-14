import React from 'react';
import { Link } from 'react-router-dom'

export default function NavBar(){
    return(
        <div className = "flex flex-col">
            <section>
                Ecowash Logo
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