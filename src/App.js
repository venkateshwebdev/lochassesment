import logo from "./logo.svg";
import "./App.css";
import RightPane from "./Components/RightPane/RightPane";
import LeftPane from "./Components/LeftPane/LeftPane";

function App() {
  return (
    <div className="App">
      <LeftPane />
      <RightPane />
    </div>
  );
}

export default App;
