import Map from "../component/mapa";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useRef, useEffect, useState } from "react";
import "../../styles/mapa.css";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

const Mapahome = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  mapboxgl.accessToken =
    "pk.eyJ1Ijoia29kdXBldCIsImEiOiJjbDluZW5tZnowNmkyM29vNmxsdGxjaDFmIn0.3SNVb1qlkaRM3lqd_AZHsA";
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
    // <Map
    //   style="mapbox://styles/mapbox/streets-v9"
    //   center={[-0.481747846041145, 51.3233379650232]}
    //   containerStyle={{
    //     height: "40vh",
    //     width: "100vw",
    //   }}
    // >
    //   <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
    //     <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
    //   </Layer>
    // </Map>
  );
};
export default Mapahome;
