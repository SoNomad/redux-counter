import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCustomerAction } from "../store/customerReduser";

function Customers() {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers.customers);

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div
              style={{ marginTop: "10px" }}
              onClick={() => removeCustomer(customer)}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div>Клиенты отсутсвуют</div>
      )}
    </>
  );
}

export default Customers;
