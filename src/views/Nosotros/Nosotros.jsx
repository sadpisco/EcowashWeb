import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';

export default function Nosotros(){
    return(
        <main className="w-screen min-h-screen flex flex-col items-center justify-between">
            <header className = "w-full">
                <NavBar />
            </header>
            <body className = "bg-slate-800  h-auto w-full flex flex-col items-start justify-center">
                <h1>Nosotros</h1>
            </body>
            <footer className = "w-full">
                <Footer />
            </footer>
        </main>
    )
}