import React from "react";
import { useDispatch } from "react-redux";
import { addCustomerAction } from "../store/customerReduser";

const Buttons = () => {
  const dispatch = useDispatch();

  const incHandler = (cash) => {
    dispatch({ type: "plus", payload: cash });
  };
  const decHandler = (cash) => {
    dispatch({ type: "minus", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  return (
    <div className="btn">
      <button onClick={() => incHandler(Number(prompt()))}>Add cash</button>
      <button onClick={() => decHandler(Number(prompt()))}>Minus cash</button>
      <button onClick={() => addCustomer(prompt())}>Add customer</button>
    </div>
  );
};

export default Buttons;
