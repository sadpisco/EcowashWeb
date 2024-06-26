import React from 'react';
import { Link } from 'react-router-dom';
import CottageIcon from '@mui/icons-material/Cottage';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import BusinessIcon from '@mui/icons-material/Business';
import CallIcon from '@mui/icons-material/Call';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import styles from './NavBar.module.css'
import logoExample from '../../assets/ECOWASH.png';


export default function NavBar() {
    return (
        <section 
        className= {`${styles.navBar} bg-slate-900 flex flex-row items-center justify-around h-20 w-full `}
        >
            <section className="flex flex-row items-center justify-center h-14">
                <img src={logoExample} alt="Logo Ecowash" className = "max-h-[70px] lg:max-h-[100px]" />
            </section>
            <section className="flex flex-row mr-1 lg:mr-0">
                <Link to="/" className="text-white p-2 bg-transparent">
                    <button className = "flex flex-row items-center justify-center bg-transparent">
                        <CottageIcon className = {styles.icon}/>
                        <h2 className = " font-montserrat p-1 invisible absolute lg:relative lg:visible">Home</h2>
                    </button>
                </Link>
                <Link to="/services" className="text-white p-2 bg-transparent">
                    <button className = "flex flex-row items-center justify-center bg-transparent">
                        <DirectionsCarFilledIcon className = {styles.icon}/>
                        <h2 className = " font-montserrat p-1 invisible absolute lg:relative lg:visible">Servicios</h2>
                    </button>
                </Link>
                <Link to="/nosotros" className="text-white p-2 bg-transparent">
                    <button className = "flex flex-row items-center justify-center bg-transparent">
                        <BusinessIcon className = {styles.icon}/>
                        <h2 className = " font-montserrat p-1 invisible absolute lg:relative lg:visible">Nosotros</h2>
                    </button>
                </Link>
                <Link to="/contact" className="text-white p-2 bg-transparent">
                    <button className = "flex flex-row items-center justify-center bg-transparent">
                        <CallIcon className = {styles.icon}/>
                        <h2 className = " font-montserrat p-1 invisible absolute lg:relative lg:visible">Contacto</h2>
                    </button>
                </Link>
                <Link to="/booking" className="text-white p-2 bg-transparent">
                    <button className = "flex flex-row items-center justify-center bg-transparent">
                        <EditCalendarIcon className = {styles.icon}/>
                        <h2 className = " font-montserrat p-1 invisible absolute lg:relative lg:visible">Reservar Cita</h2>
                    </button>
                </Link>
            </section>
        </section>
    );
};