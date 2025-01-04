import React from "react";
import "./listpage.css";
import { Data } from "../../../lib/data";
import { Card } from "../../card/Card";
import { Filter } from "./../../filter/Filter";
import Map from "../../map/Map";

function Services() {
  // console.log(3);

  const data = Data;

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <h1>fdfdd</h1>
        <Map items={data} />
      </div>
    </div>
  );
}
export default Services;
