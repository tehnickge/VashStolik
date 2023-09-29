import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import React, { useState } from 'react'

const Costs = (props) => {

  const [selectedYear, setSelectedYear] = useState('2021');

  const yearChangeHandler = (year) => {
    console.log(year);
    console.log("From Cost");
    setSelectedYear(year);
  };

  const filteredCoasts = props.costs.filter(cost => {
    if (selectedYear !== "all") {
      return cost.date.getFullYear().toString() === selectedYear;
    } else {
      return cost
    }
  });

  return (
    <div>
      <Card className="costs">
        <CostFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        {filteredCoasts.length === 0 ? (<p>в этом году нет затрат</p>) : (
          filteredCoasts.map((cost) => (<CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
          )))}
      </Card>
    </div>
  );
}

export default Costs;