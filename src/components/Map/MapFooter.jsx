import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import credentials from '../../../credentials';

function MapFooter() {
    const center = {
        lat: -8.09907,
        lng: -79.02473
      };

const containerStyle = {
  width: '100%',
  height: '90%',
  borderRadius: '10px',
  boxShadow: '0px 0px 2px 2px black',
  paddingTop: '5px'
};

  return (
    <div style={containerStyle}>
    <APIProvider apiKey={credentials.API_MAPS_KEY}>
      <Map defaultCenter={center} defaultZoom={17}>
        <Marker position={center} label={'Ecowash Detailing'}/>
      </Map>
    </APIProvider>
    </div>
  );
}

export default MapFooter;