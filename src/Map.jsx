import React from 'react';
import GoogleMaps from 'simple-react-google-maps';


export default function Maps ( props ) {
    return(
        <div className = "bg-slate-300 w-40">
        <GoogleMaps 
        apiKey = {'AIzaSyDHPFUmP7wxsjLhOfKn1xJzs7o-LB1V4e0'}
        style = {{heith: '500px', with: '500px'}}
        zoom={15}
        center={{lat: -8.099022342736578, lng: -79.0247195440295}}

        />
        </div>

    )
};



