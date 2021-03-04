import React from "react";
import { MapContainer as LeafleMap, TileLayer } from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <LeafleMap center={center} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LeafleMap>
    </div>
  );
};

export default Map;
