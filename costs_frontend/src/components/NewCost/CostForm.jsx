import React, { useState } from "react";
import "./CostForm.css";
import Button from "../UI/Button";

const CostForm = (props) => {
  

  //несколько состояний
  const [descriptionValue, setDescriptionValue] = useState("");
  const descriptionChange = (e) => {
    setDescriptionValue(e.target.value);
  };

  const [amountValue, setAmountValue] = useState("");
  const amountChange = (e) => {
    setAmountValue(e.target.value);
  };

  const [dateValue, setDateValue] = useState("");
  const dateChange = (e) => {
    setDateValue(e.target.value);
  };

  //одно состояние
  // const [userInput, setUserInput] = useState({
  //     name: '',
  //     date: '',
  //     amount: ''
  // })

  // const nameChangeOneState = (e) => {
  //     setUserInput((previousState) => {
  //         return {
  //             ...previousState,
  //             name: e.target.value
  //         }
  //     })
  // }

  const submitHandler = (e) => {
    e.preventDefault();
    const costData = {
      description: descriptionValue,
      date: dateValue,
      amount: amountValue,
    };
    props.onSaveCostData(costData);
    setDescriptionValue("");
    setDateValue("");
    setAmountValue("");
    props.onIsShown(false)
  };

  return (
    <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
          <div className="new-cost__control">
            <label htmlFor="">Название</label>
            <input
              type="text"
              value={descriptionValue}
              onChange={descriptionChange}
            />
          </div>
          <div className="new-cost__control">
            <label htmlFor="">Cумма</label>
            <input
              type="number"
              min="1"
              value={amountValue}
              onChange={amountChange}
            />
          </div>
          <div className="new-cost__control">
            <label htmlFor="">Дата</label>
            <input
              type="date"
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
              value={dateValue}
              onChange={dateChange}
            />
          </div>
          <div className="new-cost__actions">
            <Button type="submit">Добавить Расход</Button>
            <Button onClick={() => props.onIsShown(false)}>Отмена</Button>
          </div>
        </div>
    </form>
  );
};

export default CostForm;
