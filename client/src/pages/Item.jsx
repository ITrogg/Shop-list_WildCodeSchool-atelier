import { useLoaderData } from "react-router-dom";

import "./Item.css";

function Item() {
  const item = useLoaderData();
  return (
    <div className="item-container">
      <h1 className="item-title">{item.title}</h1>
      <p className="item-category">{item.category}</p>
      <p className="item-status">{item.status}</p>
      {item.link && (
        <p className="item-link">
          <a href={item.link}>Link</a>
        </p>
      )}
    </div>
  );
}

export default Item;
