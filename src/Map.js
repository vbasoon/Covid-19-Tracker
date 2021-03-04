import React from "react";
import { MapContainer as LeafMap, TileLayer } from "react-leaflet";
import "./Map.css";

const Map = () => {
  return (
    <div>
      <LeafMap>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LeafMap>
    </div>
  );
};

export default Map;
