import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import styles from './Services.module.css';
import info from '../../data.json';
import { useState } from 'react';
import CardServicio from '../../components/CardServicio/CardServicio';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import carroceriaImg from '../../assets/otros servicios/8.png';
import pulidoImg from '../../assets/otros servicios/7.png';
import descontaminadoImg from '../../assets/otros servicios/9.png';

export default function Services(){
    const amountOfCards = info.lavados.length; //4
    let [index, setIndex] = useState(0)
    const [service, setService ] = useState(info.lavados[index]);

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
            <header className = "w-screen">
                <NavBar />
            </header>
            <section className = "bg-slate-800  h-auto w-full flex flex-col items-start justify-center">
                <section className = {`${styles.divOne} w-full flex flex-col items-center justify-center h-[350px]`}>
                <h1 className = "font-montserrat font-semibold text-whit text-center text-white">Nuestros Servicios</h1>
                </section>
                <section className = "p-[5vh] flex flex-col justify-center h-full w-full items-center bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] ">
                    {service && <CardServicio service = {service}/>}
                    <div className = "flex flex-row items-center justify-center gap-[2vh] pt-[2vh]">
                    <button className = "bg-slate-200 p-0 rounded-md h-[60px] min-w-[150px] text-black flex items-center justify-center font-montserrat font-semibold text-lg shadow-xl" onClick={prevSlide}><NavigateBeforeIcon />Anterior</button>
                    <button className = "bg-slate-200 p-0  rounded-md h-[60px] min-w-[150px] text-black flex items-center justify-center font-montserrat font-semibold text-lg shadow-xl" onClick={nextSlide}>Siguiente<NavigateNextIcon /></button>
                    </div>
                </section>
                <div className = "h-full w-full bg-fuchsia-400 bg-[size:20px_20px] opacity-100 blur-[0px]">
                <section className = "w-full flex flex-col items-center justify-center p-[4vh] h-auto bg-neutral-900">
                    <h1 className = "font-montserrat font-semibold w-full text-center text-white text-3xl lg:text-4xl">Otros Servicios</h1>
                    <div className = "bg-gray h-[80%] w-[90%] flex flex-col lg:flex-row items-center justify-around p-[4vh] gap-[6vh]">
                        <div className = "flex flex-col items-center gap-8 justify-around w-[100%] max-w-[400px] lg:w-[30%]">
                            <img src = {descontaminadoImg} className = "h-[200px] rounded-lg border-4 border-white shadow-2xl"/>
                            <h4 className = "font-montserrat text-center text-xl lg:text-2xl font-bold text-white">Descontaminación de carrocería</h4>
                            <p className = "font-montserrat text-center text-lg font-medium text-white">Limpieza profunda y detallada utilizando diferentes técnicas y productos para lograr eliminar aquellas partículas que se incrustan en la superficie del coche, sin perjudicar a la pintura ni rayarlo.</p>
                            <p className = "text-black font-montserrat font-semibold text-xl bg-slate-200 p-4 rounded-md">S/. 80</p>
                        </div>
                        <div className = "flex flex-col items-center gap-8 justify-around w-[100%] max-w-[400px] lg:w-[30%]">
                        <img src = {carroceriaImg} className = "h-[200px] rounded-lg border-4 border-white shadow-2xl"/>
                            <h4 className = "font-montserrat text-center text-xl lg:text-2xl font-bold text-white">Tratamiento de pintura</h4>
                            <p className = " font-montserrat text-center text-lg font-medium text-white">Recubrimientos cerámicos o cerámicos líquidos de alta calidad son aplicados a la pintura del vehiculo. Estos recubrimientos proporcionan una capa duradera y resistente que protege la pintura contra los rayos UV, los contaminantes ambientales, los arañazos y la decoloración.</p>
                            <p className = "text-black font-montserrat font-semibold text-xl bg-slate-200 p-4 rounded-md">S/. 180</p>
                        </div>
                        <div className = "flex flex-col items-center gap-8 justify-around w-[100%] max-w-[400px] lg:w-[30%]">
                        <img src = {pulidoImg} className = "h-[200px] rounded-lg border-4 border-white shadow-2xl"/>
                            <h4 className = "font-montserrat text-center text-xl lg:text-2xl font-bold text-white">Pulido de faros</h4>
                            <p className = "font-montserrat text-center text-lg font-medium text-white">Es uno de los efectos más acusados del paso del tiempo en los vehículos, incluso entre aquellos mejor cuidados por sus conductores. Los faros son pulidos utilizando productos especializados para ello y priorizar la presencia de tu vehiculo.</p>
                            <p className = "text-black font-montserrat font-semibold text-xl bg-slate-200 p-4 rounded-md">S/. 60</p>
                        </div>
                    </div>
                </section >
                </div>
            
            </section>
            <footer className = "w-full">
                <Footer />
            </footer>
        </main>
    )
};