import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import logo from '../../assets/logoexample.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <main className="w-screen min-h-screen flex flex-col items-center justify-between">
            <header className="w-full">
                <NavBar />
            </header>
            <body className={`${styles.background} bg-slate-800  h-[auto] w-full flex flex-col items-start justify-center p-[5vh]`} >
                <section className={`${styles.divContact} flex flex-col items-center justify-around  h-[auto] w-[90%] max-w-[700px] lg:flex-row gap-[1vh]`}>
                    <section className="flex flex-col items-start justify-center h-full gap-[1vh]">
                        <img src={logo} alt='logo' className="w-[100%] " />
                        <a href="'https://maps.app.goo.gl/p26UAheG15eJNkRL7'" className=" flex flex-row text-center items-center w-[350px] h-[50px] justify-start  text-white rounded-md font-montserrat text-lg"><LocationOnIcon />Av Salvador Lara 958</a>
                        <a href="mailto:ensege_fachasa@hotmail.com" target="_blank" className=" flex flex-row text-center items-center w-[350px] h-[50px] justify-start  text-white rounded-md font-montserrat text-lg">ensege_fachasa@hotmail.com</a>
                        <a href="tel:(51)(934091325)" className="  flex flex-row text-center items-center w-[350px] h-[50px] justify-start  text-white rounded-md font-montserrat text-lg"><CallIcon />+51 934091325</a>
                    </section>
                    <section className="flex flex-col items-center justify-around h-[auto] p-[4vh] gap-[2vh]">
                        
                        <h1 className="text-center font-montserrat font-semibold text-4xl text-white">Redes</h1>
                        <div className = "w-[100%] flex flex-row items-center justify-around gap-[2vh] lg:flex-col">
                        <a href='http://wa.me/51934091325' target="_blank" className="text-white flex flex-row items-center justify-between h-auto w-[115px] p-2 bg-green-600 rounded-sm shadow-black shadow-lg">
                            <WhatsAppIcon />
                            <h3 className="text-white">WhatsApp</h3>
                        </a>
                        <a href='https://www.facebook.com/GrupoFachasa' target="_blank" className="text-white flex flex-row items-center justify-between h-auto w-[115px] p-2 bg-sky-700 rounded-sm shadow-lg shadow-black">
                            <FacebookIcon />
                            <h3 className="text-white">Facebook</h3>
                        </a>
                        <a href='https://www.instagram.com/ecowash.pe/' target="_blank" className="text-white flex flex-row items-center justify-between h-auto w-[115px] p-2 bg-orange-600 rounded-sm shadow-lg shadow-black">
                            <InstagramIcon />
                            <h3 className="text-white">Instagram</h3>
                        </a>
                        </div>
                    </section>

                </section>

            </body>
            <footer className="w-full">
                <Footer />
            </footer>
        </main>
    )
}