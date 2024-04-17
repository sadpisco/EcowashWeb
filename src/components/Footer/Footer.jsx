import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/logoexample.png';

export default function Footer(){
    return(
        <body className = "sticky left-0 bottom-0 min-h-40 min-w-full bg-slate-900 flex flex-row justify-center items-center">
            <section>
            <img src = {logo} alt = "Logo Ecowash" className = "h-64"/>
            </section>
            <section className = "">
                <div className = "flex flex-row items-center justify-between">
                   <h3 className = "font-montserrat font-normal">Numero:</h3><a href="tel:(51)(954163059)">954163059</a>
                </div>
                <div className = "flex flex-row items-center justify-between">
                   <h3 className = "font-montserrat">Email</h3> <h3 className = "font-montserrat">leo99153@gmail.com</h3>
                </div>
                <div>
                   <h3>Whatsapp</h3>
                   <h3>Facebook</h3>
                   <h3>Instagram</h3>
                </div>
            </section>
        </body>
    )
}