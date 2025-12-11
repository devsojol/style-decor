import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const CoverageMap = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center">
        Service Coverage Map
      </h2>
      <p className="text-center text-gray-600 mt-2 mb-10">
        We provide decoration services across major areas of Bangladesh
      </p>
      <div className="h-[400px] max-w-7xl rounded-2xl overflow-hidden shadow-lg my-6">
        <MapContainer
          center={[23.8103, 90.4125]} // Dhaka
          zoom={10}
          className="h-full w-full"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <Marker position={[23.8103, 90.4125]}>
            <Popup>We provide service in Dhaka City</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default CoverageMap;
