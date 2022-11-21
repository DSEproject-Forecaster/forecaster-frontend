import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Form, Button, Row, Col } from "react-bootstrap";
import dummydata from './dailyWeatherData.json';
import '../css/dailyVisualization.css' 
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
    plugins: {

        title: {
            display: true,
            text: 'Weather Component change analysis of today',
        },
    },
};


function DailyVisualization() {
    const weatherComponents1 = [{ "wid": 1, "weatherComponentName": "Temprature" }, { "wid": 2, "weatherComponentName": "WindRate" }, { "wid": 3, "weatherComponentName": "DewPoint" }];
    const [weatherComponentCount, setweatherComponentCount] = useState(dummydata);

    const [weatherComponents, setweatherComponents] = useState(weatherComponents1);
    const [weatherComponent, setweatherComponent] = useState('oranges')

    const [labels, setLabels] = useState([]);
    const [data1, setdata1] = useState([]);


    const changeweatherComponent = (weatherComponent) => {
        setweatherComponent(weatherComponent);
        if (weatherComponent != 0) { const weatherComponentArray = weatherComponentCount.filter((c) => c.wid == weatherComponent); 


        let temp = [];
        weatherComponentArray[0].graphdata.map(p => { temp.push((Object.keys(p)[0])) });
        console.log(temp);

        let temp1 = [];
        weatherComponentArray[0].graphdata.map(p => { temp1.push((Object.values(p)[0])) });
        console.log("temp1", temp1);

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
        <div >
            <Form className=' my-3'>
            <Row className='SelectWeatherComponent'>
                <Col className='text-right' >
                    <Form.Label>Weather Component</Form.Label>
                </Col>
                <Col>
                    <select size="lg" className='form-select' onChange={(event) => changeweatherComponent(event.target.value)} value={weatherComponent}>
                        <option value="0"> Select Component</option>
                        {weatherComponents.map(weatherComponent => (<option value={weatherComponent.wid}>  {weatherComponent.weatherComponentName} </option>))}
                    </select>
                </Col>
            </Row>
        </Form>
        <Line className='container-dailyVisualize' options={options} data={data} />
        </div>


    )
}

export default DailyVisualization