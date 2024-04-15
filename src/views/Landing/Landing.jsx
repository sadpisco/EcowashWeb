import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { landing } from '../../data.json';

export default function Landing(){
    return(
        <div className="bg-slate-600 w-full min-h-full">
            <header className = "">
                <NavBar />
            </header>
            Hello from Landing
            <footer>
                <Footer />
            </footer>
        </div>
    )
}