import React, {useEffect, useState} from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselCard from './CarouselCard';
import "../css/carouselContainer.css"
import { getComment } from '../Utils/getComment';
import axios from 'axios';
import dummyData from "../json/carouselData.json";

function CarouselContainer() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 12
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 9
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 6
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };

    const [data, setData] = useState(dummyData);

    useEffect(() => {
      axios.get(`http://127.0.0.1:5050/forecasts/getPredictions/`)
      .then(res => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("Could not fetch predictions")
      })}, [])


    return (
        <Carousel responsive={responsive} className="container-carousel">
            {data.map((e,i) => {
                return <CarouselCard key={i} temp={e.temperature} time={e.time_stamp} windspeed={e.wind_speed} cloud={e.total_cloud_cover} humidity={e.relative_humidity} rad1={e.surface_solar_radiation} rad2={e.surface_thermal_radiation} comment={getComment(e)}/>
            })}
        </Carousel>
    )
}

export default CarouselContainer