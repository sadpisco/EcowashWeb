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
                <section className = "w-full flex flex-col items-center justify-center h-auto p-10 bg-gradient-to-r from-black to-slate-500 ">
                    {service && <CardServicio service = {service}/>}
                    <div className = "flex flex-row items-center justify-center gap-[2vh] pt-[2vh]">
                    <button className = "bg-slate-200 p-0 rounded-md h-[60px] w-[150px] text-black flex items-center justify-center font-montserrat font-semibold text-lg shadow-xl" onClick={prevSlide}><NavigateBeforeIcon />Anterior</button>
                    <button className = "bg-slate-200 p-0  rounded-md h-[60px] w-[150px] text-black flex items-center justify-center font-montserrat font-semibold text-lg shadow-xl" onClick={nextSlide}>Siguiente<NavigateNextIcon /></button>
                    </div>
                </section>
                <section className = "w-full flex flex-col items-center justify-center p-[4vh] h-auto bg-gradient-to-r from-slate-700 to-slate-900 ">
                    <h1 className = "font-montserrat font-semibold w-full text-center">Otros Servicios</h1>
                    <div className = "bg-gray h-[80%] w-[90%] flex items-center justify-around p-[4vh]">
                        <div className = "flex flex-col items-center gap-8 justify-around w-[30%] ">
                            <img src = {descontaminadoImg} className = "h-[200px] rounded-lg border-4 border-white shadow-2xl"/>
                            <h4 className = "font-montserrat text-center text-2xl font-bold">Descontaminación de carrocería</h4>
                            <p className = "font-montserrat text-center text-lg font-medium">Limpieza profunda y detallada utilizando diferentes técnicas y productos para lograr eliminar aquellas partículas que se incrustan en la superficie del coche, sin perjudicar a la pintura ni rayarlo.</p>
                            <p className = "text-black font-montserrat font-semibold text-xl bg-slate-200 p-4 rounded-md">S/. 80</p>
                        </div>
                        <div className = "flex flex-col items-center gap-8 justify-around w-[30%] ">
                        <img src = {carroceriaImg} className = "h-[200px] rounded-lg border-4 border-white shadow-2xl"/>
                            <h4 className = "font-montserrat text-center text-2xl font-bold">Tratamiento de pintura</h4>
                            <p className = " font-montserrat text-center text-lg font-medium">Recubrimientos cerámicos o cerámicos líquidos de alta calidad son aplicados a la pintura del vehiculo. Estos recubrimientos proporcionan una capa duradera y resistente que protege la pintura contra los rayos UV, los contaminantes ambientales, los arañazos y la decoloración.</p>
                            <p className = "text-black font-montserrat font-semibold text-xl bg-slate-200 p-4 rounded-md">S/. 180</p>
                        </div>
                        <div className = "flex flex-col items-center gap-8 justify-around w-[30%] ">
                        <img src = {pulidoImg} className = "h-[200px] rounded-lg border-4 border-white shadow-2xl"/>
                            <h4 className = "font-montserrat text-center text-2xl font-bold">Pulido de faros</h4>
                            <p className = "font-montserrat text-center text-lg font-medium">Es uno de los efectos más acusados del paso del tiempo en los vehículos, incluso entre aquellos mejor cuidados por sus conductores. Los faros son pulidos utilizando productos especializados para ello y priorizar la presencia de tu vehiculo.</p>
                            <p className = "text-black font-montserrat font-semibold text-xl bg-slate-200 p-4 rounded-md">S/. 60</p>
                        </div>
                    </div>
                </section >
            
            </body>
            <footer className = "w-full">
                <Footer />
            </footer>
        </main>
    )
};