import "./App.css";
import DisplayItems from "./components/DisplayItems";

function App() {
  return (
    <div>
      <div>
        <h1>Header</h1>
      </div>

      {/* Put display items and your order in same file */}
      <DisplayItems />

      <div>
        <h1>Foot</h1>
      </div>
    </div>
  );
}

export default App;
