import React from 'react';
import { Link } from 'react-router-dom';
import CottageIcon from '@mui/icons-material/Cottage';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import BusinessIcon from '@mui/icons-material/Business';
import CallIcon from '@mui/icons-material/Call';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';


export default function NavBar(){
    const logo = '';
    return(
        <body className = "bg-slate-600 flex flex-row items-center justify-around h-16">
            <section className = "bg-red-400 flex items-center justify-center h-14">
            <img src = {logo} alt = "Logo Ecowash"/>
            </section>
            <section className = "">
                <button>
                <CottageIcon />
                <Link to = "/" className = "text-white">Home</Link>
                </button>
                <button>
                <DirectionsCarFilledIcon />
                <Link to = "/services" className = "text-white">Servicios</Link>
                </button>
                <button>
                    <BusinessIcon />
                <Link to = "/nosotros" className = "text-white">Nosotros</Link>
                </button>
                
                <button>
                    <CallIcon />
                <Link to = "/contact" className = "text-white">Contacto</Link>

                </button>
                <button>
                    <EditCalendarIcon />
                <Link to = "/booking" className = "text-white">Reservar Cita</Link>
                </button>
            </section>
        </body>
    );
};