import React from 'react';
import styles from './CardServicio.module.css';

export default function CardServicio(service){
    return(
        <div className="w-[95%] max-w-[700px] h-auto min-h-[380px] flex flex-col items-center justify-center rounded-lg  xl:flex-row gap-[2vh]">
            <img src={service.service.img} alt={service.service.nombre} className="w-[auto] max-w-[300px] h-[auto] shadow-4xl rounded-lg" />
            <section className="gap-[2vh] pl-4 pr-4 flex flex-col items-center justify-around h-[auto]  rounded-lg w-[100%]">
                <h1 className="font-white font-montserrat font-semibold text-2xl text-white text-center lg:text-4xl">{service.service.nombre}</h1>
                <p className="font-montserrat font-normal text-md text-white text-center lg:text-lg">{service.service.descripcion}</p>
                <section className="flex flex-row items-center justify-around  w-[auto] h-auto min-h-[60px] bg-slate-200 shadow-xl">
                    <div className=" rounded-sm h-auto flex flex-col items-center justify-center text-black   font-montserrat  p-4" >
                        <h4 className="font-montserrat text-md font-semibold lg:text-lg">Auto</h4>
                        <h6 className="font-montserrat font-medium text-md lg:text-lg">S/. {service.service.auto}</h6>
                    </div>
                    <div className=" rounded-sm h-auto flex flex-col items-center justify-center text-black   font-montserrat  p-4">
                        <h4 className="font-montserrat text-md font-semibold lg:text-lg">SUV</h4>
                        <h6 className="font-montserrat font-medium text-md lg:text-lg">S/. {service.service.suv}</h6>
                    </div>
                    <div className="  rounded-sm h-auto flex flex-col items-center justify-center text-black   font-montserrat  p-4">
                        <h4 className="font-montserrat text-md font-semibold lg:text-lg">4x4</h4>
                        <h6 className="font-montserrat font-medium text-md lg:text-lg">S/. {service.service.forbyfor}</h6>
                    </div>
                    <div className="  rounded-sm h-auto flex flex-col items-center justify-center text-black   font-montserrat p-4">
                        <h4 className="font-montserrat text-md font-semibold lg:text-lg">Van</h4>
                        <h6 className="font-montserrat font-medium text-md lg:text-lg">S/. {service.service.van}</h6>
                    </div>
                </section>

            </section>

        </div>
    )
}