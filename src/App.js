import "./styles.css";
import sampleStore from "./utils/store";
import { Provider } from "react-redux";
import About from "./Compon/About";

export default function App() {
  return (
    <>
      <Provider store={sampleStore}>
        <div className="App">
          <About />
        </div>
      </Provider>
    </>
  );
}
