import "./Costs.css";
import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import React, { useState } from 'react'
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

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
        <CostsDiagram costs={filteredCoasts} />
        <CostList costs={filteredCoasts} />
      </Card>
    </div>
  );
}

export default Costs;