import React, { useState } from "react";
import CostItem from "./CostItem";
import "./CostList.css";
import Card from "../UI/Card";
import CostsFilter from "../CostsFilter/CostsFilter";
import CostsDiagram from "./CostsDiagram";

const CostList = ({ costs, selectedYear, onYearChange, onDeleteCost }) => {
  const costsFilterYear = (year) => {
    onYearChange(year);
  };

  return (
    <div>
      <Card className="costs">
        <CostsFilter onChangeYear={costsFilterYear} year={selectedYear} />
        <CostsDiagram costs={costs}/>
        {costs.length == 0 && (
          <h1 style={{ textTransform: "capitalize", textAlign: "center" }}>
            В этом году нет расходов
          </h1>
        )}
        <ul style={{padding: 0}}>
          {costs.length != 0 &&
            costs.map((cost, i) => (
              <li key={cost.id} style={{listStyleType: 'none', padding: 0}}>
                <CostItem
                  description={cost.description}
                  date={cost.date}
                  amount={cost.amount}
                  id={cost.id}
                  onDeleteCost={onDeleteCost}
                />
              </li>
            ))}
        </ul>
      </Card>
    </div>
  );
};

export default CostList;
