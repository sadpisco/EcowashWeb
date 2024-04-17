import React from 'react';
import { Link } from 'react-router-dom';
import CottageIcon from '@mui/icons-material/Cottage';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import BusinessIcon from '@mui/icons-material/Business';
import CallIcon from '@mui/icons-material/Call';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import styles from './NavBar.module.css'


export default function NavBar() {
    const logo = '';
    return (
        <body className="bg-slate-900 flex flex-row items-center justify-around h-20">
            <section className="bg-red-400 flex flex-row items-center justify-center h-14">
                <img src={logo} alt="Logo Ecowash" />
            </section>
            <section className="flex flex-row">
                <Link to="/" className="text-white p-2">
                    <button className = "flex flex-row items-center justify-center">
                        <CottageIcon className = {styles.icon}/>
                        <h2 className = " font-montserrat p-1">Home</h2>
                    </button>
                </Link>
                <Link to="/services" className="text-white p-2">
                    <button className = "flex flex-row items-center justify-center">
                        <DirectionsCarFilledIcon className = {styles.icon}/>
                        <h2 className = " font-montserrat p-1">Servicios</h2>
                    </button>
                </Link>
                <Link to="/nosotros" className="text-white p-2">
                    <button className = "flex flex-row items-center justify-center">
                        <BusinessIcon className = {styles.icon}/>
                        <h2 className = " font-montserrat p-1">Nosotros</h2>
                    </button>
                </Link>
                <Link to="/contact" className="text-white p-2">
                    <button className = "flex flex-row items-center justify-center">
                        <CallIcon className = {styles.icon}/>
                        <h2 className = " font-montserrat p-1">Contacto</h2>
                    </button>
                </Link>
                <Link to="/booking" className="text-white p-2">
                    <button className = "flex flex-row items-center justify-center">
                        <EditCalendarIcon className = {styles.icon}/>
                        <h2 className = " font-montserrat p-1">Reservar Citas</h2>
                    </button>
                </Link>
            </section>
        </body>
    );
};