import { useLoaderData } from "react-router-dom";
import Row from "./components/ListRow";
import "./App.css";

function App() {
  const items = useLoaderData();

  return (
    <main className="page-container">
      <table className="data-table">
        <thead className="header-row ">
          <th className="title">Nom du Produit</th>
          <th className="label">Type de produit</th>
          <th className="label">Catégorie budget</th>
          <th className="optional">Lien (si renseigné)</th>
        </thead>
        <tbody>
          {items.map((item) => (
            <Row key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default App;
