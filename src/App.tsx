import "./App.css";
import ResultSummary from "./components/ResultSummary";

function App() {
  return (
    <main className=" grid min-h-screen place-content-center">
      <h1 className=" sr-only">Results summary component</h1>
      <ResultSummary />
    </main>
  );
}

export default App;
