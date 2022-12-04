import { useSelector } from "react-redux";

function Number() {
  const cash = useSelector((state) => state.cash.cash);
  return <div className="num">{cash}</div>;
}

export default Number;
