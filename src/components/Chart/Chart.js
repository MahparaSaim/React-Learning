import "./Chart.css";

import ChartBar from "./ChartBar";
import React from "react";

function Chart(props) {
  const dataPoitsValue = props.dataPoints.map((datapoint) => datapoint.value);
  const totalMax = Math.max(...dataPoitsValue);
  return (
    <div className="chart">
      {console.log("chart component")}
      {props.dataPoints.map((dataPoint1) => (
        <ChartBar
          key={dataPoint1.label}
          value={dataPoint1.value}
          maxValue={totalMax}
          label={dataPoint1.label}
        />
      ))}
    </div>
  );
}

export default Chart;
