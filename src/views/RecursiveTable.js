
import React from "react";

function RecursiveTable({data}){
    
    const renderRows = (data, order, requestor) => {
        const rows = [];
        for (const key in data){
            if (typeof data[key] === 'object'){
                rows.push(...renderRows(data[key], order, requestor))
            }
            else{
                rows.push(
                    <tr key={`${order} - ${requestor} - ${key}`}>
                        <td>{order}</td>
                        <td>{requestor}</td>
                        <td>{Array.isArray(data) ? key:data[key]}</td>
                        <td>{data[key]}</td>

                    </tr>
                    
                )
            }
        }
        return rows;
    }

    const allRows=[];
    for (const order in data){
        for (const requestor in data[order]){
            
            allRows.push(...renderRows(data[order][requestor], order, requestor))
        }
    }
        

    return (
        <div className="table">
                
                  <table id='data-table'>
                    <thead>
                      <tr>
                          <th>Order #</th>
                          <th>Requestor</th>
                          <th>Vendor Name</th>
                          <th>OTP Description</th>
                      </tr>
                    </thead>
                    <tbody>
                        {allRows}
                    </tbody>
                    
                  </table>
                    
        </div>
    )
}


export default RecursiveTable;