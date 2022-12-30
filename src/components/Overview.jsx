import React, { useEffect, useState } from 'react';
import '../css/overview.css';
import { OverviewSubComponent } from './OverviewSubComponent';
import { OverviewSummary } from './OverviewSummary';
import { getComment } from '../Utils/getComment';
import axios from 'axios';
import dummyData from "../json/carouselData.json";

const attributes = ["dewpoint_temperature", "mean_sea_level_pressure", "relative_humidity", "surface_solar_radiation", "surface_thermal_radiation", "total_cloud_cover", "wind_speed"]
const attributeNames = ["Dewpoint", "Pressure", "Humidity", "Solar Radiation", "Thermal Radiation", "Cloud Cover", "Wind"]
const units = ["°C", "kPa", "%", "", "", "%", "kmph"]

function Overview() {

  const [data, setData] = useState(dummyData);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5050/forecasts/getPredictions/`)
      .then(res => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("Could not fetch predictions")
      })
  }, [])

  return (
    <div className='container-overview'>
      <OverviewSummary {...data[0]} comment={getComment(data[0])} />
      <div className="feature-values">
        {data.map((e, i) => {
          console.log(getComment(e));
          return <OverviewSubComponent key={i} name={attributeNames[i]} value={e[attributes[i]]} unit={units[i]} />
        })}
      </div>
    </div>
  )
}

export default Overview