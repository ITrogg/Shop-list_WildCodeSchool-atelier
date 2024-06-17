import { useLoaderData } from "react-router-dom";
import Row from "./components/ListRow";
import "./App.css";

function App() {
  const items = useLoaderData();

  return (
    <table>
      {items.map((item) => (
        <Row key={item.id} item={item} />
      ))}
    </table>
  );
}

export default App;
