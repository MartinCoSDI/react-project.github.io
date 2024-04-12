import React from "react";
import Plot from 'react-plotly.js';

function BarHorizontal({xaxis,yaxis,xname, yname, name}){
    return (
        <Plot className='data-delivery'
        data={[
          {
            type: 'bar',
            x: xaxis,
            y: yaxis,
            orientation:'h'
          }
        ]}
        layout={ {width: 1000, height: 480, title: name,
        xaxis: {
            title: xname
         },yaxis: {
            title: yname,
            automargin: true
         },
         margin:{
          l: 350
         }
        } }
      />
    )
}


export default BarHorizontal;