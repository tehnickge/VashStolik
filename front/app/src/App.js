import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const App = (props) => {
  const costs = [
    {
      id: "C1",
      date: new Date(2023, 4, 13),
      costAmount: 439.992,
      costDiscprition: "Жопа",
    },
    {
      id: "C2",
      date: new Date(2023, 5, 12),
      costAmount: 95499.99,
      costDiscprition: "пися",
    },
    {
      id: "C3",
      date: new Date(2023, 7, 12),
      costAmount: 2999.99,
      costDiscprition: "сака",
    },
  ];

  const addCostHandler = (cost) => {
    console.log(cost);
    console.log('from-app');

  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;


