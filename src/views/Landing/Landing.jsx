import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { landing } from '../../data.json';

export default function Landing(){
    return(
        <div className="bg-slate-200 w-full h-fit">
            <header className = "">
                <NavBar />
            </header>
            <body className = "bg-lime-600 min-h-">
            Hello from Landing
            </body>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}