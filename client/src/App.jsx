import { useLoaderData } from "react-router-dom";
import Row from "./components/ListRow";
import "./App.css";

function App() {
  const items = useLoaderData();
  const headerTable = {
    title: "Nom du Produit",
    link: "no-link",
    category: "Type de produit",
    status: "Catégorie budget",
  };

  return (
    <div className="page-container">
      <table className="data-table">
        <thead>
          <Row cssClass="header-row" item={headerTable} />
        </thead>
        <tbody>
          {items.map((item) => (
            <Row cssClass="item-row" key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
