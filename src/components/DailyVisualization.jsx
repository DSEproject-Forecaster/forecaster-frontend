import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Form, Row, Col } from "react-bootstrap";
import dummydata from '../json/carouselData.json';
import '../css/dailyVisualization.css';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        title: {
            display: true,
            text: 'Weather Component change analysis of today',
        },
    },
    elements: {
        line: {
            tension : 0.4  // smooth lines
        },
    },
};


function DailyVisualization() {
    const weatherComponents1 = [{ "wid": 1, "weatherComponentName": "DewPoint" },
                                    { "wid": 2, "weatherComponentName": "Pressure" },
                                    { "wid": 3, "weatherComponentName": "Humidity" },
                                    { "wid": 4, "weatherComponentName": "Solar Radiation" },
                                    { "wid": 5, "weatherComponentName": "Thermal Radiation" },
                                    { "wid": 6, "weatherComponentName": "Cloud Cover" },
                                    { "wid": 7, "weatherComponentName": "WindSpeed" },
                                    { "wid": 8, "weatherComponentName": "Temperature" }
                                ];
    const [weatherComponentCount, setweatherComponentCount] = useState(dummydata);

    const [weatherComponents, setweatherComponents] = useState(weatherComponents1);
    const [weatherComponent, setweatherComponent] = useState('oranges')

    const [labels, setLabels] = useState([]);
    const [data1, setdata1] = useState([]);

    const attributes = ["dewpoint_temperature", "mean_sea_level_pressure", "relative_humidity", "surface_solar_radiation", "surface_thermal_radiation", "total_cloud_cover", "wind_speed", "temperature"]
    
    useEffect(() => {
        axios.get(`http://127.0.0.1:5050/forecasts/getPredictions/`)
        .then(res => {
            let data = [...dummydata]
            res.data.map((e) => {
                for(let i=0; i<8; i++){
                    const key=e.time_stamp.substring(11,16);
                    data[i]['graphdata'].push({[key]: e[attributes[i]]});
                }
                return null;
            });
            setweatherComponentCount(data);
        })
        .catch((err) => {
            console.log("Could not fetch predictions")
        })}, [])

    const changeweatherComponent = (weatherComponent) => {
        setweatherComponent(weatherComponent);
        if (weatherComponent != 0) { const weatherComponentArray = weatherComponentCount.filter((c) => c.wid == weatherComponent); 


        let temp = [];
        weatherComponentArray[0].graphdata.map(p => { temp.push((Object.keys(p)[0])) });

        let temp1 = [];
        weatherComponentArray[0].graphdata.map(p => { temp1.push((Object.values(p)[0])) });

        setLabels(temp);
        setdata1(temp1);
    }else{
        setLabels([]);
        setdata1([]);
    }
    }


    const data = {
        labels,
        datasets: [
            {
                label: 'Time',
                data: data1,
                borderColor: 'rgb(35,165,179)',
                backgroundColor: 'rgb(35,165,179)',
            }

        ],
    };

    return (
        <div className='container-dailyVisualize'>
            <Form className=' my-3'>
            <Row className='SelectWeatherComponent'>
                <Col xs={4}></Col>
                <Col xs={2} className='text-right' >
                    <Form.Label>Weather Component</Form.Label>
                </Col>
                <Col  xs={2}>
                    <select size="lg" className='form-select' onChange={(event) => changeweatherComponent(event.target.value)} value={weatherComponent}>
                        <option value="0"> Select Component</option>
                        {weatherComponents.map(weatherComponent => (<option value={weatherComponent.wid}>  {weatherComponent.weatherComponentName} </option>))}
                    </select>
                </Col>
                <Col xs={4}></Col>
            </Row>
            </Form>
            <div>
            <Line  height="400px" options={options} data={data} />
            </div>
            
        </div>
    )
}

export default DailyVisualization