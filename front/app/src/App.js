import Costs from "./components/Costs/Costs";

const App = () => {
  const costs = [
    {
      date: new Date(2023, 4, 13),
      costAmount: 439.992,
      costDiscprition: "Жопа",
    },
    {
      date: new Date(2023, 5, 12),
      costAmount: 95499.99,
      costDiscprition: "пися",
    },
    {
      date: new Date(2023, 7, 12),
      costAmount: 2999.99,
      costDiscprition: "сака",
    },
  ];
  return (
    <div>
      <Costs costs={costs} />
    </div>
  );
}

export default App;