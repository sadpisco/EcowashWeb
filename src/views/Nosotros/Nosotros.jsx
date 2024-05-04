import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import styles from './Nosotros.module.css';
import { nosotros } from '../../data.json';

export default function Nosotros(){
    return(
        <main className="w-screen min-h-screen flex flex-col items-center justify-between">
            <header className = "w-full">
                <NavBar />
            </header>
            <section className = "bg-gradient-to-b from-black to-blue-950 h-auto w-full flex flex-col items-center justify-center shadow-black">
                <section className = {`${styles.banner} w-full flex flex-col items-center justify-end h-[450px]`}>
                    <h1 className='text-black text-6xl font-montserrat font-bold p-6'>Nosotros</h1>
                </section>
                <section className = " flex flex-col items-center justify-center w-full gap-[3vh] p-[3vh]">
                    <div className = "w-[100%] max-w-[1400px] flex flex-col items-center justify-center gap-[3vh] p-[3vh] bg-slate-500/10 rounded">
                    <h1 className = "text-center w-full font-montserrat text-2xl font-semibold text-white lg:text-4xl">¿Quienes somos?</h1>
                    <p className = "font-montserrat text-justify text-lg font-normal text-white lg:text-xl">{nosotros.QuienesSomos}</p>
                    </div>
                </section>
                <section className = " flex flex-col items-center justify-center w-full gap-[3vh] p-[3vh]">
                    <div className = "w-[100%] max-w-[1400px] flex flex-col items-center justify-center gap-[3vh] p-[3vh] bg-slate-900/90 rounded" >
                <h1 className = "text-center w-full font-montserrat text-2xl lg:text-4xl font-semibold text-white">Nuestra Historia</h1>
                <p className = "font-montserrat text-justify text-lg font-normal text-white lg:text-xl">{nosotros.NuestraHistoria}</p>
                </div>
                </section>
                <section className = " flex flex-col items-center justify-center w-full gap-[3vh] p-[3vh]">
                    <div className = "w-[100%] max-w-[1400px] flex flex-col items-center justify-center gap-[3vh] p-[3vh] bg-slate-900/100 rounded">
                    <h1 className = "text-center w-full font-montserrat text-2xl lg:text-4xl font-semibold text-white">Misión</h1>
                    <p className = "font-montserrat text-justify text-lg font-normal text-white lg:text-xl">{nosotros.Mision}</p>
                    </div>
                </section>
                <section className = " flex flex-col items-center justify-center w-full gap-[3vh] p-[3vh]">
                    <div className = "w-[100%] max-w-[1400px] flex flex-col items-center justify-center gap-[3vh] p-[3vh] bg-slate-950/60 rounded">
                    <h1 className = "text-center w-full font-montserrat text-2xl lg:text-4xl font-semibold text-white">Visión</h1>
                    <p className = "font-montserrat text-justify text-lg font-normal text-white lg:text-xl">{nosotros.Vision}</p>
                    </div>
                </section>
            </section>
            <footer className = "w-full">
                <Footer />
            </footer>
        </main>
    )
}