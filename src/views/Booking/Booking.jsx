import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

export default function Booking(){
    useCalendlyEventListener({
        onProfilePageViewed: () => console.log("onProfilePageViewed"),
        onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
        onEventTypeViewed: () => console.log("onEventTypeViewed"),
        onEventScheduled: (e) => console.log(e.data.payload),
      });
    return(
        <main className="w-screen min-h-screen flex flex-col items-center justify-between">
            <header className = "w-full">
                <NavBar />
            </header>
            <body className = "bg-slate-800  h-auto w-full flex flex-col items-start justify-center">
            <InlineWidget 
            url="https://calendly.com/leo99153" 
            styles = {{height: '76vh', width: '100%', scrollBehavior: 'unset'}}
            utm={Booking}
            />
            </body>
            <footer className = "w-full">
                <Footer />
            </footer>
        </main>
    )
}