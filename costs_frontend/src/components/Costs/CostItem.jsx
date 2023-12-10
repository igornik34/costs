import React, { useState } from "react";
import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
import axios from "axios";
import Button from "../UI/Button";

const CostItem = ({ id, onDeleteCost, description, date, amount }) => {
  return (
    <Card className="cost-item">
      <CostDate date={date} />
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">${amount}</div>
        <Button
          onClick={() => {
            onDeleteCost(id);
          }}
          type='button'
        >
          Удалить
        </Button>
      </div>
    </Card>
  );
};

export default CostItem;
