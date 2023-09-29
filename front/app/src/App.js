import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, { useState } from 'react'

const INITIAL_COST = [
  {
    id: "C1",
    date: new Date(2022, 4, 13),
    amount: 439.992,
    description: "Жопа",
  },
  {
    id: "C2",
    date: new Date(2021, 5, 12),
    amount: 95499.99,
    description: "пися",
  },
  {
    id: "C3",
    date: new Date(2019, 7, 12),
    amount: 2999.99,
    description: "сака",
  },
];

const App = (props) => {

  const [costs, setCosts] = useState(INITIAL_COST);

  const addCostHandler = (cost) => {
    setCosts(previosState => {
      return [cost, ...previosState]
    });
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;


