import React from 'react';
import styles from './CardServicio.module.css';

export default function CardServicio(service){
    return(
        <div className = "w-[1000px] max-w-[90%] h-auto min-h-[380px] flex flex-row items-center justify-center rounded-lg">
            <img src = {service.service.img} alt = {service.service.nombre} className = "w-[300px] h-[380px] shadow-2xl rounded-lg"/>
            <section className = "pl-8 pr-8 flex flex-col items-center justify-around h-[380px] bg-slate-900 rounded-lg">
            <h1 className = "font-white font-montserrat font-semibold text-4xl text-white">{service.service.nombre}</h1>
             <p className = "font-montserrat font-normal text-xl text-white">{service.service.descripcion}</p>
             <section className = "flex flex-row items-center justify-around  w-[70%] h-auto min-h-[60px]">
                <div className = "bg-slate-200  rounded-sm h-auto flex flex-col items-center justify-center text-black   font-montserrat shadow-xl p-4" >
                    <h4 className = "font-montserrat text-lg font-semibold">Auto</h4>
                    <h6 className = "font-montserrat font-medium text-lg">S/. {service.service.auto}</h6>
                </div>
                <div className = "bg-slate-200  rounded-sm h-auto flex flex-col items-center justify-center text-black   font-montserrat shadow-xl p-4">
                    <h4 className = "font-montserrat text-lg font-semibold">SUV</h4>
                    <h6 className = "font-montserrat font-medium text-lg">S/. {service.service.suv}</h6>
                </div>
                <div className = "bg-slate-200  rounded-sm h-auto flex flex-col items-center justify-center text-black   font-montserrat shadow-xl p-4">
                    <h4 className = "font-montserrat text-lg font-semibold">4x4</h4>
                    <h6 className = "font-montserrat font-medium text-lg">S/. {service.service.forbyfor}</h6>
                </div>
                <div className = "bg-slate-200  rounded-sm h-auto flex flex-col items-center justify-center text-black   font-montserrat shadow-xl p-4">
                    <h4 className = "font-montserrat text-lg font-semibold">Van</h4>
                    <h6 className = "font-montserrat font-medium text-lg">S/. {service.service.van}</h6>
                </div>
             </section>

            </section>
             
        </div>
    )
}