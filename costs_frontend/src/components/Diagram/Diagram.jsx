import React from "react";
import "./Diagram.css";
import DiagramBar from "./DiagramBar";
function Diagram({ dataSets }) {

    const maxMonthCosts = Math.max(...dataSets.map(dataset => dataset.value))

  return (
    <div className="diagram">
      {dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          maxValue={maxMonthCosts}
          label={dataSet.label}
          value={dataSet.value}
        />
      ))}
    </div>
  );
}

export default Diagram;
