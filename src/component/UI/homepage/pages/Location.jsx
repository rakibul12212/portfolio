"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 23.803411200583852, // Your Latitude
  lng:  90.37631130020584, // Your Longitude
};

const Location = () => {
  return (
    <div>
      <LoadScript
        googleMapsApiKey={process.env.MapsApiKey}
      >
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Location;
