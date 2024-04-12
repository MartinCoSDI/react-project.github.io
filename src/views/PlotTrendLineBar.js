import React from "react";
import Plot from 'react-plotly.js';

function TrendlineBar({xaxis,yaxis, ybar,xname, yname, name}){
    return (
        <Plot className='data-delivery'
        data={[
          {
            x: xaxis,
            y: yaxis,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
            name: 'Orders'
          },
          
          {type:'bar', x:xaxis , y: ybar, yaxis: 'y2', name:'Value'}
        ]}
        layout={ {width: 500, height: 480, title: name,
          
            
        xaxis: {
            title: xname
         },yaxis: {
            title: yname
         },
            yaxis: {title: yname},
            yaxis2: {
                title: 'yaxis2 title',
                titlefont: {color: 'rgb(148, 103, 189)'},
                tickfont: {color: 'rgb(148, 103, 189)'},
                overlaying: 'y',
                side: 'right'
  }

        } }
      />
    )
}


export default TrendlineBar;