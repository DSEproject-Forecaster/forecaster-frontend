import Overview from "./Overview";
import DailyVisualization from "./DailyVisualization";

export function Home() {
    return (
        <div className="container-fluid">
            <Overview/>
            <DailyVisualization/>
        </div>
    )
}