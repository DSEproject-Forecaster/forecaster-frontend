import React, {useState, useEffect} from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

export function MonthlyPredictions(){

    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get(`http://127.0.0.1:5050/forecasts/getMonthlyRadar/`)
      .then(res => {
        setData(res.data);
      })}, [])

    return(
        <div>
        <h1 className='heading text-center mb-3 mt-5'>Forecast for the next 12 months</h1>
        <Plot
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            className='mt-3'
            data={data}
            useResizeHandler={true}
            layout={ {width: 1000, height: 800} }
        />
        </div>
    )
}