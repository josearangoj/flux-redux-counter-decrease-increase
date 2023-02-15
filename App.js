import { Provider } from "react-redux";
import CounterApp from "./components/CounterApp";
import store from "./redux/store/index";

export default function App() {
  return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );
}
