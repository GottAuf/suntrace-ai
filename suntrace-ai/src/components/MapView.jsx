import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

function ChangeView({ center, zoom }) {
  const map = useMap();

  map.setView(center, zoom);

  return null;
}

function MapView({ location }) {
  return (
    <MapContainer
      center={[location.lat, location.lng]}
      zoom={location.zoom}
      className="h-full w-full rounded-xl"
    >
      <ChangeView
        center={[location.lat, location.lng]}
        zoom={location.zoom}
      />

      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {location.zoom > 2 && (
        <Marker position={[location.lat, location.lng]}>
          <Popup>
            Selected Property
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default MapView;