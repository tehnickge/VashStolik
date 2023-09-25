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

  }

return (
  <div>
    <Card className="costs">
    <CostFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
    { props.costs.map((cost) => (<CostItem
      date={cost.date}
      description={cost.costDiscprition}
      amount={cost.costAmount}
      />
      ))}
      <CostItem
        date={props.costs[0].date}
        description={props.costs[0].costDiscprition}
        amount={props.costs[0].costAmount}
      />
      <CostItem
        date={props.costs[1].date}
        description={props.costs[1].costDiscprition}
        amount={props.costs[1].costAmount}
      />
      <CostItem
        date={props.costs[2].date}
        description={props.costs[2].costDiscprition}
        amount={props.costs[2].costAmount}
      />
    </Card>
  </div>
);
}

export default Costs;