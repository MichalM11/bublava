import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";

const LeafletMap = (props) => {
  return (
    <MapContainer
      style={{ width: "100%", height: "50vh", maxHeight: "50rem" }}
      center={[50.37, 12.51]}
      zoom={11}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[50.37, 12.51]}>
        <Tooltip>Vila Bublava</Tooltip>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
