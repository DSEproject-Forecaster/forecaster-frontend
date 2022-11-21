import React from 'react'
import '../css/overview.css'
import { OverviewSubComponent } from './OverviewSubComponent'
import { OverviewSummary } from './OverviewSummary'
import dummyData from "./OverviewData.json"

const attributes= ["Dewpoint", "Wind", "Humidity", "Cloud Cover", "Radiation", "Pressure"]
function Overview() {
    return (
        <div className='container-overview'>
            {/* TODO: Update props of the OverviewSummary */}
            {/* TODO: Fetch data from the backend - Can use same api as caraousel data*/}
            <OverviewSummary temp="30" comment="Sunny"/>
            <div className="feature-values">
                {dummyData.map((e, i) => {
                    return <OverviewSubComponent key={i} name={attributes[i]} value={e.value} comment={e.comment}/>
                })}
            </div>


        </div>
    )
}

export default Overview