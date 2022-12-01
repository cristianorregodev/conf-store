import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export const Map = ({ data }) => {
  const position = [data.latitude, data.longitude];
  return (
    <MapContainer center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
