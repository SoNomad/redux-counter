import Buttons from "./Buttons";
import Number from "./Number";
import { Provider } from "react-redux";
import { store } from "../store";
import Customers from "./Customers";

function App() {
  return (
    <Provider store={store}>
      <Number />
      <Buttons />
      <Customers />
    </Provider>
  );
}

export default App;
