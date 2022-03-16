import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard name={"Doe, Jane"} hairColor={"Black"} age={45} />
      <PersonCard name={"Smith, John"} hairColor={"Brown"} age={88} />
    </div>
  );
}

export default App;
