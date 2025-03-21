"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: 23.80182,
  lng: 90.37631,
};

const Location = () => {
  return (
    <div className="pt-20">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}>
        <div className="overflow-hidden rounded-xl">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        </div>
      </LoadScript>
    </div>
  );
};

export default Location;
