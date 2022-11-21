import Overview from "./Overview";
import DailyVisualization from "./DailyVisualization";
import CarouselContainer from "./CarouselContainer"

export function Home() {
    return (
        <div className="container-fluid">
            <Overview/>
            <CarouselContainer/>
            <DailyVisualization/>
        </div>
    )
}