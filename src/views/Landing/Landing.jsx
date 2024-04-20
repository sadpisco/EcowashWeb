import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { landing } from '../../data.json';
import styles from './Landing.module.css';
import logoOne from '../../assets/3m.png';
import logoTwo from '../../assets/sonax.png';
import logoThree from '../../assets/karcher.png';
import logoFour from '../../assets/wurth.png';
import logoFive from '../../assets/motul.png'

export default function Landing(){
    return(
        <main className="w-screen h-screen flex flex-col items-center justify-between">
            <header className="w-full">
                <NavBar />
            </header>
            <body className = "bg-slate-600  h-auto w-full flex flex-col items-start justify-start">
                <section className = {`${styles.divOne} w-full flex flex-col items-center justify-end`}>
                    <div className = {`${styles.compDivOne} w-full p-8`}>
                    <h1 className = "text-white ml-80 font-montserrat text-4xl font-bold">{landing.titleOne}</h1>
                    <p className = "text-white ml-80 font-montserrat text-xl">{landing.textOne}</p>
                    </div>
                </section>
                <section className = "bg-white w-full h-auto flex flex-col items-center justify-center p-4">
                    <h1 className = "font-montserrat text-4xl font-bold text-black p-4">Trabajamos con</h1>
                    <div className = "w-full h-auto flex flex-row items-center justify-around p-6">
                        <img src = {logoOne} className = {styles.img} />
                        <img src = {logoTwo} className = {styles.Sonax} />
                        <img src = {logoThree} className = {styles.img} />
                        <img src = {logoFour} className = {styles.img} />
                        <img src = {logoFive} className = {styles.img} />
                    </div>
                </section>
                <section className = {`${styles.divTwo} w-full flex flex-row items-center justify-center`}>
                    <article className = {`${styles.compDivTwo} flex flex-row items-center justify-center rounded p-10`}>
                        <h1 className = "font-montserrat">
                            Bienvenido a Ecowash
                        </h1>

                    </article>

                </section>
            </body>
            <footer className = "w-full">
                <Footer />
            </footer>
        </main>
    )
}