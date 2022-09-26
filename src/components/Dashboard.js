import React from 'react';
import {DailySesaonalChart} from './DailySesaonalChart';


export function Dashboard(){

    return(
        <>
            <div className='row m-4'>
                <div className='col-4'>
                    <div className='container shadow bg-white rounded-3'>
                        <DailySesaonalChart/>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='container shadow bg-white rounded-3'>
                        <DailySesaonalChart/>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='container shadow bg-white rounded-3'>
                        <DailySesaonalChart/>
                    </div>
                </div>
            </div>
        </>  
    )
}