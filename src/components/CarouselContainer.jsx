import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselCard from './CarouselCard';
import "../css/carouselContainer.css"

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
    return (
        <Carousel responsive={responsive} className="container-carousel">
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
        </Carousel>
    )
}

export default CarouselContainer