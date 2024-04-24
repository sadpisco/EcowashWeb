import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import styles from './Booking.module.css';

export default function Booking(){
    useCalendlyEventListener({
        onProfilePageViewed: () => console.log("onProfilePageViewed"),
        onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
        onEventTypeViewed: () => console.log("onEventTypeViewed"),
        onEventScheduled: (e) => console.log(e.data.payload),
      });
      const utmParams = {
        utmCampaign: 'spring_promotion',
        utmSource: 'newsletter',
        utmMedium: 'email'
        // Add more UTM parameters as needed
      };
    
    return(
        <main className="w-screen min-h-screen flex flex-col items-center justify-between">
            <header className = "w-full">
                <NavBar />
            </header>
            <body className = "bg-slate-800  h-auto w-full flex flex-col items-start justify-center">

            <div className = {styles.calendly}>
            <InlineWidget 
            url="https://calendly.com/leo99153" 
            styles = {{height: '82vh', width: '100%', scrollBehavior: 'unset', backgroundColor: 'black'}}
            pageSettings={{
                backgroundColor: '282828',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '282828',
                textColor: '282828',
                hideGdprBanner: true,
                scrollBehavior: 'unset'
              }}
              utm={utmParams}
              
            />
            </div>
            </body>
            <footer className = "w-full">
                <Footer />
            </footer>
        </main>
    )
};