import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";

const Costs = (props) => {
return (
  <Card className="costs">
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
);
}

export default Costs;