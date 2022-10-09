import React, {useState, useEffect} from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

export function Correlations(){

    const [data, setData] = useState([])

    useEffect(() => {
      axios.get(`http://127.0.0.1:5050/dashboard/getCorrelations/`)
      .then(res => {
        setData(res.data);
      })}, [])

      const updatemenus=[
        {
            buttons: [
                {
                    args: ['type', 'surface'],
                    label: '3D Surface',
                    method: 'restyle'
                },
                {
                    args: ['type', 'heatmap'],
                    label:'Heatmap',
                    method:'restyle'
                }
            ],
            direction: 'left',
            pad: {'l': -100, 't': -20},
            showactive: true,
            type: 'buttons',
            x: 0.1,
            xanchor: 'left',
            y: 1.1,
            yanchor: 'top'
        }
    ]
    return(
        <Plot
          data={data}
          layout={ {aspectratio: {x: 1, y: 1, z: 0.7}, aspectmode: 'manual', updatemenus: updatemenus, title: 'Correlations', autosize: false, margin: {t: 80, l:120}} }
          useResizeHandler={true}
          style = {{width: "100%", height: "100%"}}
        />
    )
}