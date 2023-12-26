import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./home.css";

const PieChart = () => {
    const [state] = useState({
      series: [44, 55, 13, 43], // Removed one data point (22)
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['America', 'Asia', 'Europe', 'Africa'], // Adjusted labels
        legend: {
          position: 'bottom'
        },
      },
    });

  
    return (
      <div className="pie-chart-container">
        <ReactApexChart options={state.options} series={state.series} type="pie" width={380}/>
      </div>
    )
  }
  
  export default PieChart;
  