import React from "react";
import "./CostDate.css";

const CostDate = ({ date }) => {
  const parseDate = new Date(date)
  const month = parseDate.toLocaleString("ru-RU", { month: "long" });
  const year = parseDate.getFullYear();
  const day = parseDate.toLocaleString("ru-RU", { day: "2-digit" });

  return (
    <div className="cost-date">
      <div className="cost-date__month">{month}</div>
      <div className="cost-date__year">{year}</div>
      <div className="cost-date__day">{day}</div>
    </div>
  );
};

export default CostDate;
