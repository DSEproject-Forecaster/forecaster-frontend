import React, {useEffect, useState} from 'react';
import '../css/overview.css';
import { OverviewSubComponent } from './OverviewSubComponent';
import { OverviewSummary } from './OverviewSummary';
import { getComment } from '../Utils/getComment';
import axios from 'axios';
import dummyData from "../json/carouselData.json";

const attributes = ["dewpoint", "windspeed", "humidity", "cloudcover", "rad1", "rad2", "pressure"]
const attributeNames = ["Dewpoint", "Wind", "Humidity", "Cloud Cover", "Thermal Radiation", "Solar Radiation", "Pressure"]
const units = ["°C", "kmph", "%", "%", "", "", "kPa"]

function Overview() {

    const [data, setData] = useState(dummyData);

    useEffect(() => {
      axios.get(`http://127.0.0.1:5050/dashboard/getPredictions/`)
      .then(res => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("Could not fetch predictions")
      })}, [])

    return (
        <div className='container-overview'>
            <OverviewSummary {...data[5]} comment={getComment(data[5])}/>
            <div className="feature-values">
                {data.map((e, i) => {
                    return <OverviewSubComponent key={i} name={attributeNames[i]} value={e[attributes[i]]} unit={units[i]} comment={e.comment}/>
                })}
            </div>
        </div>
    )
}

export default Overview