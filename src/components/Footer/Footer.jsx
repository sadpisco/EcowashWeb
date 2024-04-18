import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/logoexample.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function Footer(){
    return(
        <body className="fixed left-0 bottom-0 h-56 min-w-full bg-slate-900 flex flex-row justify-around items-center">
            <section className="flex flex-col items-center justify-center">
                <img src={logo} alt="Logo Ecowash" className="h-64" />
            </section>
            <section className=" w-auto mt-2 h-36">
                <h2 className = "font-montserrat text-2xl font-bold">Contáctanos</h2>
                <div className="flex flex-row items-center justify-start mt-1">
                    <CallIcon className = {styles.icon}/><h3 className="font-montserrat ms-1">Llámanos al <a href="tel:(51)(954163059)">+51 954163059</a></h3>
                </div>
                <div className="flex flex-row items-center justify-start mt-1">
                    <AlternateEmailIcon className = {styles.icon}/><h3 className="font-montserrat ms-1">Escríbenos a <a href="tel:(51)(954163059)">ecowash@ecowash.com</a></h3>
                </div>
                <section className="flex flex-row items-center justify-between w-[360px] mt-2">
                    <a href='http://wa.me/51954163059' className = "text-white flex flex-row items-center justify-between h-auto w-[115px] p-2 bg-lime-600 rounded-sm shadow-black shadow-lg">
                        <WhatsAppIcon />
                        <h3 className = "text-white">Whatsapp</h3>
                    </a>
                    <a href='http://wa.me/51954163059' className = "text-white flex flex-row items-center justify-between h-auto w-[115px] p-2 bg-sky-700 rounded-sm shadow-lg shadow-black">
                        <FacebookIcon />
                        <h3 className = "text-white">Facebook</h3>
                    </a>
                    <a href='http://wa.me/51954163059' className = "text-white flex flex-row items-center justify-between h-auto w-[115px] p-2 bg-orange-700 rounded-sm shadow-lg shadow-black">
                        <InstagramIcon />
                        <h3 className = "text-white">Instagram</h3>
                    </a>
                </section>
            </section>
            <section className=" w-auto mt-2 h-36">
                <h2 className = "font-montserrat text-2xl font-bold">Trabaja con Nosotros</h2>
                <div className="flex flex-row items-center justify-between mt-1">
                    <h3 className="font-montserrat">Llámanos al <a href="tel:(51)(954163059)">954163059</a></h3>
                </div>
                <div className="flex flex-row items-center justify-between mt-1">
                    <h3 className="font-montserrat">Escríbenos a <a href="tel:(51)(954163059)">ecowash@ecowash.com</a></h3>
                </div>
            </section>
            <section className=" w-auto mt-2 h-36">
                <h2 className = "font-montserrat text-xl font-bold">📍Avenida Salvador Lara 985</h2>

            </section>
        </body>
    )
}