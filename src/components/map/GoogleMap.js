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
      initialCenter={{ lat: 45, lng: 16 }}
    >
      <Marker position={{ lat: 45, lng: 16 }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAPzHoHiHzzNkn8vQwt3oefaB8OfpGaXx0",
  language: "cs_CZ",
})(GoogleMap);
