import React from 'react';
import {DailySesaonalChart} from './DailySeasonalChart';
import {YearlySeasonalChart} from './YearlySeasonalChart';
import {TrendChart} from './TrendChart';
import {Correlations} from './Correlations';
import {BoxPlots} from './BoxPlots'


export function Dashboard(){

    return(
        <>
            <div className='row m-4 h-25'>
                <div className='col-4'>
                    <div className='container shadow bg-white rounded-3'>
                        <DailySesaonalChart/>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='container shadow bg-white rounded-3'>
                        <YearlySeasonalChart/>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='container shadow bg-white rounded-3'>
                        <TrendChart/>
                    </div>
                </div>
            </div>
            <div className='row m-4 h-25'>
                <div className='col-4'>
                    <div className='container shadow bg-white rounded-3'>
                        <Correlations/>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='container shadow bg-white rounded-3'>
                        <BoxPlots/>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='container shadow bg-white rounded-3'>
                        <TrendChart/>
                    </div>
                </div>
            </div>
        </>   
    )
}