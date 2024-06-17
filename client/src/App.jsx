import { useLoaderData } from "react-router-dom";
import "./App.css";

function App() {
  const items = useLoaderData();
  console.log(items);
  return <h1> Sommething will bien here </h1>;
}

export default App;
