import React from 'react'
import eve from "../../eve.json";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

function Catogery() {
  return (
    <div className='h-screen' >
        <div>
            <Doughnut
                data={{
                    labels:eve.map((items)=>items.alert?.rev),
                    datasets:[{
                        labels:"Catogery",
                        data:eve.map((items)=>items.alert?.category),

                    }]
                }}
            />
        </div>
    </div>
  )
}

export default Catogery