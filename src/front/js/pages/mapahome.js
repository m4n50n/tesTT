import Map from "../component/mapa";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useRef, useEffect, useState } from "react";
import "../../styles/mapa.css";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

const Mapahome = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-3.74922);
  const [lat, setLat] = useState(40.463667);
  const [zoom, setZoom] = useState(4);

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
    fetch(process.env.BACKEND_URL + "/api/map")
      .then((response) => response.json())
      .then((response) => {
        response.forEach((element) => {
          new mapboxgl.Marker()
            .setLngLat([element.longitude, element.latitude])
            .setPopup(
              new mapboxgl.Popup({
                offset: 25,
              }).setHTML(
                `<div><img style="height:80px; width: 80px;" src="${element.pet.photo}"/> <p>${element.pet.name}</p></div>`
              )
            )
            .addTo(map.current);
        });
      });
  });
  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};
export default Mapahome;
