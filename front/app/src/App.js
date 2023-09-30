import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, { useState } from 'react'

const INITIAL_COST = [
  {
    id: "C1",
    date: new Date(2022, 1, 13),
    amount: 439,
    description: "Жопа",
  },
  {
    id: "C2",
    date: new Date(2021, 2, 12),
    amount: 154,
    description: "пися",
  },
  {
    id: "C3",
    date: new Date(2019, 1, 12),
    amount: 299,
    description: "сака",
  },
  {
    id: "C4",
    date: new Date(2021, 2, 12),
    amount: 93,
    description: "пися",
  },
  {
    id: "C5",
    date: new Date(2019, 10, 12),
    amount: 500,
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


