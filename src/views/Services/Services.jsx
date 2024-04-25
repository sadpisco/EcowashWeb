import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import styles from './Services.module.css';
import info from '../../data.json';
import { useState } from 'react';
import CardServicio from '../../components/CardServicio/CardServicio';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export default function Services(){
    const amountOfCards = info.lavados.length; //4
    let [index, setIndex] = useState(0)
    const [service, setService ] = useState(info.lavados[index]);
    console.log(index);

    function nextSlide(){
        if(index == (amountOfCards - 1)){
            return null;
        } else if (index < amountOfCards){
            setIndex(++index);
            setService(info.lavados[index]);
            console.log(index)
    };
};

    function prevSlide(){
        if (index == 0){
            return null;
        } else if(index > 0){
            setIndex(--index);
            setService(info.lavados[index]);
            console.log(index)
        };
    };

    return(
        <main className="w-screen min-h-screen flex flex-col items-center justify-between">
            <header className = "w-full">
                <NavBar />
            </header>
            <body className = "bg-slate-800  h-auto w-full flex flex-col items-start justify-center">
                <section className = {`${styles.divOne} w-full flex flex-col items-center justify-center h-[350px]`}>
                <h1 className = "font-montserrat font-semibold">Nuestros Servicios</h1>
                </section>
                <section className = "w-full flex flex-col items-center justify-center h-auto p-10 bg-slate-600">
                    {service && <CardServicio service = {service}/>}
                    <div className = "flex flex-row items-center justify-center gap-[2vh] pt-[2vh]">
                    <button className = "bg-slate-200 p-0 rounded-md h-[60px] w-[150px] text-black flex items-center justify-center font-montserrat font-semibold text-lg shadow-xl" onClick={prevSlide}><NavigateBeforeIcon />Anterior</button>
                    <button className = "bg-slate-200 p-0  rounded-md h-[60px] w-[150px] text-black flex items-center justify-center font-montserrat font-semibold text-lg shadow-xl" onClick={nextSlide}>Siguiente<NavigateNextIcon /></button>
                        
                    </div>

                </section>
            
            </body>
            <footer className = "w-full">
                <Footer />
            </footer>
        </main>
    )
};