import React, {useState, useEffect} from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

export function RadarChart(){

    const [data, setData] = useState([])
    const [year, setYear] = useState('2020')

    let years = [];

    for (let i = 2010; i <= 2020; i++){
      years.push(i.toString());
    }

    useEffect(() => {
      axios.get(`http://127.0.0.1:5050/dashboard/getRadar/`, {params: {year: year}})
      .then(res => {
        setData(res.data);
      })}, [year])

    const handleChange = (e) => {
      setYear(e.target.value);
    }

    return(
      <>
      <div className='row'>
          <div className='col-4'></div>
          <div className='col-4'>
            <select name="year" id="year" onChange={handleChange} className='form-control mt-3'>
              <option value="" selected disabled hidden>Select year</option>
              {years.map(x => <option key={years.indexOf(x)} value={x}>{x}</option>)}
            </select>
          </div>
          <div className='col-4'></div>
        </div>
        <Plot
            data={data}
            layout={ {title: 'Summary'} }
            useResizeHandler={true}
            style = {{width: "100%", height: "100%"}}
          />
      </>
        
    )
}