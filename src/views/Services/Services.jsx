import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import styles from './Services.module.css';
import lavados from '../../data.json';


export default function Services(){
    const initialPage = 1;
    const cardsPerPage = 1;
    console.log(lavados);

    return(
        <main className="w-screen min-h-screen flex flex-col items-center justify-between">
            <header className = "w-full">
                <NavBar />
            </header>
            <body className = "bg-slate-800  h-auto w-full flex flex-col items-start justify-center">
                <section className = {`${styles.divOne} w-full flex flex-col items-center justify-center h-[350px]`}>
                <h1 className = "font-montserrat font-semibold">Nuestros Servicios</h1>

                </section>
                <section className = "w-full flex flex-col items-center justify-center h-[500px]">

                </section>
            
            </body>
            <footer className = "w-full">
                <Footer />
            </footer>
        </main>
    )
}