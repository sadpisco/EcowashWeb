import React from 'react';
import styles from './CardServicio.module.css';

export default function CardServicio(service){
    console.log(service);
    return(
        <div className = "w-[900px] max-w-[90%] h-auto min-h-[380px] bg-blue-600 flex flex-row items-center justify-center rounded-lg">
            <img src = {service.service.img} alt = {service.service.nombre} className = "w-[300px] h-[380px] shadow-2xl rounded-lg"/>
            <section className = "pl-8 pr-8 flex flex-col items-center justify-around h-[380px] bg-slate-400">
            <h1 className = "font-white font-montserrat font-semibold text-4xl">{service.service.nombre}</h1>
             <p className = "font-montserrat font-normal text-xl">{service.service.descripcion}</p>
             <section className = "flex flex-row items-center content-center">
                <div>
                    <h4>Auto</h4>
                    <h6>S/. {service.service.auto}.00</h6>
                </div>
                <div>
                    <h4>SUV</h4>
                    <h6>S/. {service.service.suv}.00</h6>
                </div>
                <div>
                    <h4>4x4</h4>
                    <h6>S/. {service.service.forbyfor}.00</h6>
                </div>
                <div>
                    <h4>Van</h4>
                    <h6>S/. {service.service.van}.00</h6>
                </div>
             </section>

            </section>
             
        </div>
    )
}