import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { landing } from '../../data.json';
import styles from './Landing.module.css';
import logoOne from '../../assets/3m.png';
import logoTwo from '../../assets/sonax.png';
import logoThree from '../../assets/karcher.png';
import logoFour from '../../assets/wurth.png';
import logoFive from '../../assets/motul.png'
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import imageDivTwo from '../../assets/LandingImage3.jpg';
import imageDivThree from '../../assets/LandingImage5.jpg';
import MapLanding from '../../components/Map/MapLanding';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function Landing(){
    return(
        <main className="w-screen h-screen flex flex-col items-center justify-between">
            <header className="w-full">
                <NavBar />
            </header>
            <body className = "bg-slate-600  h-auto w-full flex flex-col items-start justify-start">
                <section className = {`${styles.divOne} w-full flex flex-col items-center justify-end`}>
                    <div className = {`${styles.compDivOne} w-full p-8`}>
                    <h1 className = "text-white ml-80 font-montserrat text-4xl font-bold">{landing.titleOne}</h1>
                    <p className = "text-white ml-80 font-montserrat text-xl">{landing.textOne}</p>
                    </div>
                </section>
                <section className = "bg-white w-full h-auto flex flex-col items-center justify-center p-4">
                    <h1 className = "font-montserrat text-4xl font-bold text-black p-4">Trabajamos con</h1>
                    <div className = "w-full h-auto flex flex-row items-center justify-around p-6">
                        <img src = {logoOne} className = {styles.img} />
                        <img src = {logoTwo} className = {styles.Sonax} />
                        <img src = {logoThree} className = {styles.img} />
                        <img src = {logoFour} className = {styles.img} />
                        <img src = {logoFive} className = {styles.img} />
                    </div>
                </section>
                <section className={`${styles.divTwo} w-full flex flex-row items-center justify-center`}>
                    <article className={`${styles.compDivTwo}  w-[50%] flex flex-row items-center justify-center rounded p-10`}>
                        <img src={imageDivTwo} className='w-[300px] rounded shadow-2xl' />
                        <div className="w-[600px] h-full flex flex-col items-center justify-center">
                            <h1 className="font-montserrat text-center text-3xl font-medium">
                                {landing.titleTwo}
                            </h1>
                            <p className="font-montserrat text-center text-lg p-8">
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
                <section className={`${styles.divThree} w-full h-auto flex flex-row items-center justify-center`}>
                    <div className={`${styles.compDivTwo} flex h-[500px] w-[50%] flex-row items-center justify-around rounded p-10`}>
                    <article className="w-[600px] h-full flex flex-col items-center justify-around ">
                        <h1 className="font-montserrat text-center text-3xl font-medium">Ubícanos</h1>
                        <MapLanding />
                        
                            <a href='https://maps.app.goo.gl/p26UAheG15eJNkRL7' className="flex flex-row items-center w-[190px] h-[60px] justify-around bg-slate-800 text-white rounded-md p-4 shadow-2xl">
                                    <LocationOnIcon />
                                    <h2 className=" font-montserrat text-lg">Google Maps</h2>
                                    </a>
                                
                    </article>
                    <img src = {imageDivThree} className='w-[300px] rounded shadow-2xl'/>
                    </div>
                </section>
            </body>
            <footer className = "w-full">
                <Footer />
            </footer>
        </main>
    )
}