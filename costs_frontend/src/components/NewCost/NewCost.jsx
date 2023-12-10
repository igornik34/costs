import React, {useState} from "react";
import "./NewCost.css";
import CostForm from "./CostForm";
import Button from "../UI/Button";

const NewCost = (props) => {
  const [isShown, setIsShown] = useState(false);

  const saveCostData = (costDataValue) => {
    const costData = {
      ...costDataValue,
      id: Date.now(),
    };
    props.onAddCost(costData);
  };
  return (
    <div className="new-cost">
      {!isShown ? (
        <Button type="button" onClick={() => setIsShown(true)}>
          Добавить Новый Расход
        </Button>
      ) : (
        <CostForm onSaveCostData={saveCostData} onIsShown={setIsShown} />
      )}
    </div>
  );
};

export default NewCost;
