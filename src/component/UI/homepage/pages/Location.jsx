"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 23.80182, // Your Latitude
  lng: 90.37631, // Your Longitude
};

const Location = () => {
  return (
    <div>
      <div>
        <p className="text-white">map</p>
      </div>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_MapsApiKey}
        className="rounded-xl"
      >
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Location;
