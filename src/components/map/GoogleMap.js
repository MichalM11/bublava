import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const GoogleMap = (props) => {
  const mapStyles = {
    width: "100%",
    height: "100%",
    maxHeight: "80rem",
  };

  return (
    <Map
      google={props.google}
      zoom={12}
      style={mapStyles}
      containerStyle={{
        height: "40rem",
        position: "relative",
      }}
      initialCenter={{ lat: 49.5503884, lng: 16.5707373 }}
    >
      <Marker position={{ lat: 49.5503884, lng: 16.5707373 }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAPzHoHiHzzNkn8vQwt3oefaB8OfpGaXx0",
  language: "cs_CZ",
})(GoogleMap);
