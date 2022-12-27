import React, {useEffect, useState} from 'react';
import { getComment } from '../Utils/getComment';
import { WeeklyCard } from './WeeklyCard';
import axios from 'axios';
import dummyData from "../json/weeklydata.json";

export function WeeklyPredictions() {

    const [data, setData] = useState(dummyData);

    useEffect(() => {
      axios.get(`http://127.0.0.1:5050/forecasts/getWeeklyPredictions/`)
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("Could not fetch predictions")
      })}, [])


    return (
        <div class="container-fluid mt-3">
        <h1 className='heading text-center mb-5 mt-5'>Forecast for the next 7 days</h1>
            <div className='row'>
                {data.map((e,i) => {
                    return <div className='col-4'><WeeklyCard key={i} temp={e.temperature} timestamp={e.time_stamp} windspeed={e.wind_speed} cloud={e.total_cloud_cover} humidity={e.relative_humidity} rad1={e.surface_solar_radiation} rad2={e.surface_thermal_radiation} comment={getComment(e)}/></div>
                })}
            </div>
            
        </div>
    )
}
