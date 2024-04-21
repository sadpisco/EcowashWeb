import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import credentials from '../../../credentials';

function MapLanding() {
    const center = {
        lat: -8.09907,
        lng: -79.02473
      };

      const containerStyle = {
        width: '90%',
        height: '280px',
        borderRadius: '10px',
        boxShadow: '0px 0px 20px 0px black',
        paddingTop: '5px'
      };

  return (
    <div style={containerStyle}>
    <APIProvider apiKey={credentials.API_MAPS_KEY}>
      <Map defaultCenter={center} defaultZoom={16}>
        <Marker position={center} label={'Ecowash Detailing'}/>
      </Map>
    </APIProvider>
    </div>
  );
}

export default MapLanding;