import React, {useState, useEffect} from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

export function BoxPlots(){

    const [data, setData] = useState([])

    useEffect(() => {
      axios.get(`http://127.0.0.1:5050/dashboard/getBoxPlots/`)
      .then(res => {
        setData(res.data);
      })}, [])

    return(
        <Plot
          data={data}
          layout={ {title: 'Summary'} }
          useResizeHandler={true}
          style = {{width: "100%", height: "100%"}}
        />
    )
}