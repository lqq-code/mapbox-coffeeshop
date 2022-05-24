import React, { useEffect, useState } from "react";
import { history } from "umi";
import mapboxgl from "mapbox-gl";
import MapboxLanguage from "@mapbox/mapbox-gl-language";
import AllAddr from "@/utils/allAddr";
import Style from "./index.less";
import icon from "../../../public/images/coffee.png";

export default () => {
  const handleInitial = () => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic3RldmFnZSIsImEiOiJjazZzd3V2dXEwNGZlM2xtZzFnOXdkOTFtIn0.pKVxwqE61gNc7PKK5u1j6g";
    var map = new mapboxgl.Map({
      style: "mapbox://styles/stevage/ciz68fsec00112rpal5hjru07?refresh=1",
      center: [121.42, 31.22], //上海市长宁区
      zoom: 11.5, //缩放级别
      minZoom: 9,
      maxZoom: 19,
      container: "map",
    });
    //设置语言：中文
    var language = new MapboxLanguage({ defaultLanguage: "zh-Hans" });
    map.addControl(language);

    map.on("load", function () {
      map.addSource("places", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: AllAddr.coffeAddr,
        },
      });
      map.addLayer({
        id: "places",
        type: "symbol",
        source: "places",
        layout: {
          "icon-image": "{icon}",
          "text-field": "{title}",
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-size": 20,
          "text-offset": [0, 0.6],
          "text-anchor": "top",
        },
        paint: {
          'text-color': '#50B4DB', 

        },
      });

      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
      });

      map.on("mouseenter", "places", (e: any) => {
        map.getCanvas().style.cursor = "pointer";
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        popup.setLngLat(coordinates).setHTML(description).addTo(map);
      });

      map.on("mouseleave", "places", () => {
        map.getCanvas().style.cursor = "";
        popup.remove();
      });
    });
  };
  useEffect(() => {
    handleInitial();
  }, []);

  return (
    <div className={Style.mapContanier}>
      <div className={Style.leftItem}>
        <div className={Style.leftBg}>{AllAddr.bgText}</div>
        <h1>长宁区咖啡馆</h1>
      </div>
      <div id="map" className={Style.mapItem} />
    </div>
  );
};
