import { MapContainer, TileLayer } from 'react-leaflet';

function MapView() {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      className="h-full w-full rounded-xl"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default MapView;