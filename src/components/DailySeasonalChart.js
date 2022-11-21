import React, {useState, useEffect} from 'react';
// import { Line } from 'react-chartjs-2';
import Plot from 'react-plotly.js';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//     PointElement
//   } from 'chart.js';
import axios from 'axios';


// const lineData={
//     datasets: [
//         {
//             label:"Temperature",
//             data:[1.051282, 2.230214, 2.882705, 3.546758, 3.799224, 3.661807, 3.206622, 2.393596, 2.105075, 1.481664, -0.031120, -0.806952, -1.238396, -1.726602, -1.871811, -2.383688, -2.564472, -2.698825, -3.126267, -2.935605, -3.055162, -2.655847, -1.157679, -0.106518, 1.051282],
//             borderColor: 'rgb(255, 99, 132)',
//             backgroundColor: 'rgba(255, 99, 132, 0.5)'
//         },
//         {
//             label:"Dewpoint",
//             data:[3.546758, 3.799224, 3.661807, 3.206622, 2.393596, -0.806952, 1.051282, 2.230214, 2.882705, -1.238396, -1.726602, -1.871811, -2.383688, -2.564472, -2.698825, -3.126267, -2.935605, -3.055162, -2.655847, -1.157679, -0.106518, 1.051282, 2.105075, 1.481664, -0.031120],
//             borderColor: 'rgb(132, 99, 255)',
//             backgroundColor: 'rgba(132, 99, 255, 0.5)'
//         },

//     ],
//     labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
// }

// const dummy = {
//   datasets: [
//     {
//         label:"",
//         data:[],
//         borderColor: 'rgb(255, 99, 132)',
//         backgroundColor: 'rgba(255, 99, 132, 0.5)'
//     },
//   ],
//   labels: [],
// }

// const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Daily Seasonality',
//       },
//     },
//   };

export function DailySesaonalChart(){
    // ChartJS.register(
    //     CategoryScale,
    //     LinearScale,
    //     LineElement,
    //     Title,
    //     Tooltip,
    //     Legend,
    //     PointElement
    //     );

    const [data, setData] = useState([])

    useEffect(() => {
      axios.get(`http://127.0.0.1:5050/dashboard/getDailySeasonalData/`)
      .then(res => {
        setData(res.data);
      })}, [])

    return(
        // <Line
        // data={data}
        // options={options}
        // />
        <Plot
          data={data}
          layout={ {title: 'Seasonal Component - Daily'} }
          useResizeHandler={true}
          style = {{width: "100%", height: "100%"}}
        />
    )
}