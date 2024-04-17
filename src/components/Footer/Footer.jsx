import React from 'react';

export default function Footer(){
    const logo = '';
    return(
        <div className = "sticky left-0 bottom-0 min-h-40 min-w-full bg-green-800 flex flex-row justify-center items-center">
            <section>
            <img src = {logo} alt = "Logo Ecowash"/>
            </section>
            <section className = "">
                <div className = "flex flex-row">
                   <h3 className = "font-montserrat font-normal">Numero</h3> <h3>954163059</h3>
                </div>
                <div className = "flex flex-row">
                   <h3 className = "font-montserrat">Email</h3> <h3>leo99153@gmail.com</h3>
                </div>
                <div>
                   <h3>Whatsapp</h3>
                   <h3>Facebook</h3>
                   <h3>Instagram</h3>
                </div>
            </section>
            
            
        </div>
    )
}