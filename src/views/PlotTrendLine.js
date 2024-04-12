import React from "react";
import Plot from 'react-plotly.js';

function Trendline({xaxis,yaxis,xname, yname, name}){
    return (
        <Plot className='data-delivery'
        data={[
          {
            x: xaxis,
            y: yaxis,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          }
        ]}
        layout={ {width: 500, height: 480, title: name,
        xaxis: {
            title: xname
         },yaxis: {
            title: yname
         }
        } }
      />
    )
}


export default Trendline;