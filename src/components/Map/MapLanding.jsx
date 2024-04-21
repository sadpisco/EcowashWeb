import React from 'react';
import styles from './Map.module.css';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '90%',
  height: '280px',
  borderRadius: '10px',
  boxShadow: '0px 0px 20px 0px black',
  paddingTop: '5px'
};

const center = {
  lat: -8.09907,
  lng: -79.02473
};


function MapLanding() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCYBB_xL5jGv3mOvcxp2ddyzkOpmpB3NtU"
  })

  const [map, setMap] = React.useState(null)

  // const onLoad = React.useCallback(function callback(map) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom = {17}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        <div>
        <Marker position = {center} label={"Ecowash"}/>
        </div>
        
      </GoogleMap>
  ) : <p>Cargando...</p>
}

export default React.memo(MapLanding);

