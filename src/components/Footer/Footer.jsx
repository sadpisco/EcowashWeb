import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/logoexample.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useMemo } from 'react';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MapFooter from '../Map/MapFooter';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer(){

    return(
        <div className = "sticky left-0 bottom-0 h-auto w-full  bg-slate-900 pt-6">
        <section className="flex flex-row justify-around items-center  h-auto">
            <section className="flex flex-col items-center justify-center w-auto">
                <img src={logo} alt="Logo Ecowash" className=" h-32" />
            </section>
            <section className=" mt-2 h-44 w-auto">
                <h2 className = "font-montserrat text-2xl font-bold text-white">Contáctanos</h2>
                <div className="flex flex-row items-center justify-start mt-1 text-white">
                    <CallIcon className = {styles.icon}/><h3 className="font-montserrat ms-1">Llámanos al <a href="tel:(51)(934091325)">+51 934091325</a></h3>
                </div>
                <div className="flex flex-row items-center justify-start mt-1 text-white">
                    <AlternateEmailIcon className = {styles.icon}/><h3 className="font-montserrat ms-1">Escríbenos a <a href="mailto:ensege_fachasa@hotmail.com" target="_blank">ensege_fachasa@hotmail.com</a></h3>
                </div>
                <section className="flex flex-row items-center justify-between w-[360px] mt-2 ">
                    <a href='http://wa.me/51934091325' target="_blank" className = "text-white flex flex-row items-center justify-between h-auto w-[115px] p-2 bg-green-600 rounded-sm shadow-black shadow-lg">
                        <WhatsAppIcon />
                        <h3 className = "text-white">WhatsApp</h3>
                    </a>
                    <a href='https://www.facebook.com/GrupoFachasa' target="_blank" className = "text-white flex flex-row items-center justify-between h-auto w-[115px] p-2 bg-sky-700 rounded-sm shadow-lg shadow-black">
                        <FacebookIcon />
                        <h3 className = "text-white">Facebook</h3>
                    </a>
                    <a href='https://www.instagram.com/ecowash.pe/' target="_blank" className = "text-white flex flex-row items-center justify-between h-auto w-[115px] p-2 bg-orange-600 rounded-sm shadow-lg shadow-black">
                        <InstagramIcon />
                        <h3 className = "text-white">Instagram</h3>
                    </a>
                </section>
            </section>
            <section className=" mt-2 h-44 w-[400px]">
                <h2 className = "font-montserrat text-2xl font-bold text-white">Trabaja con Nosotros</h2>
                <div className="flex flex-row items-center justify-between mt-1">
                    <h3 className="font-montserrat text-white">Te ofrecemos un cálido ambiente laboral, beneficios de planilla, los salarios más competitivos del mercado y altas oportunidades de crecimiento. Envíanos tu CV al whatsapp <a href="tel:(51)(934091325)">934091325</a> o a <a href="mailto:ensege_fachasa@hotmail.com" target="_blank">ensege_fachasa@hotmail.com</a>.</h3>
                </div>

            </section>
            <section className=" mt-2 h-48 w-80">
                <h2 className = "font-montserrat text-xl font-bold pb-2"><LocationOnIcon />Av Salvador Lara 985</h2>
                <MapFooter />
            </section>
        </section>
        <h3 className = "text-white text-center text-md font-montserrat pb-4">© Todos los derechos reserados. | Desarrollado por <a target="_blank" href='https://www.linkedin.com/in/leonardo-risco/' className = "text-blue text-center text-md font-montserrat">Leonardo Risco Web Developer</a></h3>
        </div>
    )
}