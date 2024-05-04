import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { landing, lavados } from '../../data.json';
import styles from './Landing.module.css';
import logoOne from '../../assets/3m.png';
import logoTwo from '../../assets/sonax.png';
import logoThree from '../../assets/karcher.png';
import logoFour from '../../assets/wurth.png';
import logoFive from '../../assets/brafinsa.png';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import imageDivTwo from '../../assets/LandingImage3.jpg';
import imageDivThree from '../../assets/LandingImage5.jpg';
import MapLanding from '../../components/Map/MapLanding';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function Landing(){
    return(
        <main className="w-screen h-screen flex flex-col items-center justify-between">
            <header className="w-screen">
                <NavBar />
            </header>
            <section className = "bg-slate-600  h-auto w-screen flex flex-col items-start justify-start">
                <section className = {`${styles.divOne} w-screen flex flex-col items-center justify-end`}>
                    <div className = {`${styles.compDivOne} w-full p-8 flex flex-col items-start justify-start`}>
                    <h1 className = "text-white font-montserrat text-4xl font-semibold pb-[2vh]">{landing.titleOne}</h1>
                    <p className = "text-white font-montserrat text-xl">{landing.textOne}</p>
                    </div>
                </section>
                <section className = "bg-white w-full h-auto flex flex-col items-center justify-center p-4">
                    <h1 className = "font-montserrat text-4xl font-bold text-black p-4">Trabajamos con</h1>
                    <div className = "w-full h-auto flex flex-col items-center gap-[4vh] justify-around p-6 lg:flex-row lg:gap-0">
                        <img src = {logoOne} className = {styles.M3} />
                        <img src = {logoTwo} className = {styles.Sonax} />
                        <img src = {logoThree} className = {styles.img} />
                        <img src = {logoFour} className = {styles.img} />
                        <img src = {logoFive} className = {styles.brafinsa} />
                    </div>
                </section>

                <section className={`${styles.divTwo} w-full flex flex-row items-center justify-center`}>
                    <article className={`${styles.compDivTwo}  w-[90%] max-w-[1000px] flex flex-row items-center justify-center rounded p-0 h-[90%]`}>
                        <img src={imageDivTwo} className='max-w-[40%] min-h-[70%] rounded shadow-2xl' />
                        <div className="w-[55%] h-full flex flex-col items-center justify-center">
                            <h1 className="font-montserrat text-center text-3xl font-medium text-white w-full lg:text-4xl pt-4">
                                {landing.titleTwo}
                            </h1>
                            <p className="font-montserrat text-center text-md p-4 text-white w-[100%] lg:text-lg">
                                {landing.textTwo}
                            </p>
                            <Link to='./booking' className="text-white p-2">
                                <button className="flex flex-row items-center w-[190px] h-[60px] justify-around bg-slate-800 rounded-md p-4 shadow-2xl">
                                    <EditCalendarIcon />
                                    <h2 className=" font-montserrat text-lg">Separar cita</h2>
                                </button>
                            </Link>
                        </div>
                    </article>
                </section>
                <section className={`w-full flex h-auto min-h-[600px] flex-col items-center justify-center p-8 bg-gradient-to-r from-neutral-900 to-gray-500`}>
                    <h1 className = "font-montserrat text-3xl text-center pb-8 font-medium text-white w-full lg:text-4xl pt-4">Algunos de nuestros servicios</h1>
                    <article className ="ml-[4vh] flex flex-row items-center justify-start w-[auto] h-[auto] min-h-[400px] overflow-auto">
                        {lavados.map((element) => 
                        <div className = "ml-4 w-[auto] flex flex-col items-center justify-between p-6 h-[auto]  bg-slate-900 rounded-lg" key = {element.nombre}>
                            <img src = {element.img} className = "min-w-[200px] w-auto h-[380px] max-h-[300px] rounded-md shadow-2xl"/>
                            <h1 className = "font-montserrat text-2xl font-semibold text-white text-center">{element.nombre}</h1>
                            {/* <p className = "font-montserrat text-start">{element.descripcion}</p> */}
                            {/* <p className = "font-montserrat text-start text-lg font-semibold">Autos: S/. {element.auto}.00</p>
                            <p className = "font-montserrat text-start text-lg font-semibold">SUV: S/. {element.auto}.00</p>
                            <p className = "font-montserrat text-start text-lg font-semibold">4x4: S/. {element.forbyfor}.00</p>
                            <p className = "font-montserrat text-start text-lg font-semibold">Vans: S/. {element.va}.00</p> */}

                        </div>)}
                    </article>
                </section>
                <section className={`${styles.divThree} w-screen h-[100vh] flex flex-row items-center justify-center p-10`}>
                    <div className={`${styles.compDivTwo} flex h-[100%] w-[100%] max-w-[1000px] flex-col items-center justify-around rounded pt-10 pb-10` }>
                        <article className="w-[90%] max-w-[900px] h-full flex flex-col items-center justify-around ">
                            <h1 className="font-montserrat text-center text-2xl font-medium text-white lg:text-4xl">Ubícanos</h1>
                            <MapLanding />
                            <a href='https://maps.app.goo.gl/p26UAheG15eJNkRL7' className="flex flex-row items-center w-[190px] h-[60px] justify-around bg-slate-800 text-white rounded-md p-4 shadow-2xl">
                                <LocationOnIcon />
                                <h2 className=" font-montserrat text-lg">Google Maps</h2>
                            </a>
                        </article>
                    {/* <img src = {imageDivThree} className='w-[300px] rounded shadow-2xl'/> */}
                    </div>
                </section>
            </section>
            <footer className = "w-full">
                <Footer />
            </footer>
        </main>
    )
}