import React from "react";
import Plot from 'react-plotly.js';

//https://plotly.com/javascript/pie-charts/

function Pie({value, title}){
    return (
        <Plot className='data-delivery'
        data={[
          {
            values: value,
            labels: ['Residential', 'Non-Residential', 'Utility'],
            type: 'pie',
            textinfo: "label+percent",
            textposition: "outside",
            automargin: true
          }
        ]}
        layout={ {height: 400,
            width: 500,
            title: title
        } }
      />
    )
}


export default Pie;

data = [{
    values: [19, 26, 55],
    labels: ['Residential', 'Non-Residential', 'Utility'],
    type: 'pie'
  }];
  
  var layout = {
    height: 400,
    width: 500
  };