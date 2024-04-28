import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import styles from './Nosotros.module.css';

export default function Nosotros(){
    return(
        <main className="w-screen min-h-screen flex flex-col items-center justify-between">
            <header className = "w-full">
                <NavBar />
            </header>
            <body className = "bg-gradient-to-b from-black to-blue-950 h-auto w-full flex flex-col items-center justify-center shadow-black">
                <section className = {`${styles.banner} w-full flex flex-col items-center justify-end h-[450px]`}>
                    <h1 className='text-black text-6xl font-montserrat font-bold p-6'>Nosotros</h1>
                </section>
                <section className = " flex flex-col items-center justify-center w-full gap-[3vh] p-[3vh]">
                    <div className = "w-[60%] flex flex-col items-center justify-center gap-[3vh] p-[3vh] bg-slate-500/10 rounded">
                    <h1 className = "text-center w-full font-montserrat text-4xl font-semibold">¿Quienes somos?</h1>
                    <p className = "font-montserrat text-justify text-lg font-normal">Somos una empresa dedicada al lavado integral de vehículos de todo tipo y tamaño. Contamos con una amplia variedad de activos y recursos para poder brindar un servicio de limpieza A1 a todos nuestros clientes. Con más de 11 años de experiencia y trayectoria en el mercado, contamos con personal capacitado y capaz de solucionar cualquier requerimiento de limpieza que tú y tu vehículo puedan tener, desde el más simple hasta el más complicado. Gracias a nuestras alianzas estratégicas y nuestras sólidas relaciones construidas con nuestros proveedores, somos capaces de ofrecerte la mayor cantidad de valor actualmente en el mercado, nuestra amplia cartera de clientes como personas naturales y jurídicas nos avalan. Pues, contamos con bastante tiempo trabajando junto a diversas entidades como empresas de taxis, flotas logísticas, organizaciones orientadas al rubro de la salud pública como clínicas y hospitales y hasta municipalidades.</p>
                    </div>
                </section>
                <section className = " flex flex-col items-center justify-center w-full gap-[3vh] p-[3vh]">
                    <div className = "w-[60%] flex flex-col items-center justify-center gap-[3vh] p-[3vh] bg-slate-900/90 rounded" >
                <h1 className = "text-center w-full font-montserrat text-4xl font-semibold">Nuestra Historia</h1>
                <p className = "font-montserrat text-justify text-lg font-normal">Ecowash Sociedad Anónima Cerrada nace en el año 2013 cuando Diego Chávez, actual gerente general y propietario, alquila un terreno en la avenida Túpac Amaru para prestar servicios de lavado de autos debido al último auge de taxistas de la ciudad de trujillo.  </p>
                </div>
                </section>
                <section className = " flex flex-col items-center justify-center w-full gap-[3vh] p-[3vh]">
                    <div className = "w-[60%] flex flex-col items-center justify-center gap-[3vh] p-[3vh] bg-slate-900/100 rounded">
                    <h1 className = "text-center w-full font-montserrat text-4xl font-semibold">Misión</h1>
                    <p className = "font-montserrat text-justify text-lg font-normal">Somos una empresa dedicada al lavado integral de vehículos de todo tipo y tamaño. Contamos con una amplia variedad de activos y recursos para poder brindar un servicio de limpieza A1 a todos nuestros clientes. Con más de 11 años de experiencia y trayectoria en el mercado, contamos con personal capacitado y capaz de solucionar cualquier requerimiento de limpieza que tú y tu vehículo puedan tener, desde el más simple hasta el más complicado. Gracias a nuestras alianzas estratégicas y nuestras sólidas relaciones construidas con nuestros proveedores, somos capaces de ofrecerte la mayor cantidad de valor actualmente en el mercado, nuestra amplia cartera de clientes como personas naturales y jurídicas nos avalan. Pues, contamos con bastante tiempo trabajando junto a diversas entidades como empresas de taxis, flotas logísticas, organizaciones orientadas al rubro de la salud pública como clínicas y hospitales y hasta municipalidades.</p>
                    </div>
                </section>
                <section className = " flex flex-col items-center justify-center w-full gap-[3vh] p-[3vh]">
                    <div className = "w-[60%] flex flex-col items-center justify-center gap-[3vh] p-[3vh] bg-slate-950/60 rounded">
                    <h1 className = "text-center w-full font-montserrat text-4xl font-semibold">Visión</h1>
                    <p className = "font-montserrat text-justify text-lg font-normal">Somos una empresa dedicada al lavado integral de vehículos de todo tipo y tamaño. Contamos con una amplia variedad de activos y recursos para poder brindar un servicio de limpieza A1 a todos nuestros clientes. Con más de 11 años de experiencia y trayectoria en el mercado, contamos con personal capacitado y capaz de solucionar cualquier requerimiento de limpieza que tú y tu vehículo puedan tener, desde el más simple hasta el más complicado. Gracias a nuestras alianzas estratégicas y nuestras sólidas relaciones construidas con nuestros proveedores, somos capaces de ofrecerte la mayor cantidad de valor actualmente en el mercado, nuestra amplia cartera de clientes como personas naturales y jurídicas nos avalan. Pues, contamos con bastante tiempo trabajando junto a diversas entidades como empresas de taxis, flotas logísticas, organizaciones orientadas al rubro de la salud pública como clínicas y hospitales y hasta municipalidades.</p>
                    </div>
                </section>
            </body>
            <footer className = "w-full">
                <Footer />
            </footer>
        </main>
    )
}