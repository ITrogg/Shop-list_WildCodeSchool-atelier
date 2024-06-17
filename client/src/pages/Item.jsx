import { useLoaderData } from "react-router-dom";

function Item() {
  const item = useLoaderData();
  return (
    <>
      <h1>{item.title}</h1>
      <p>{item.category}</p>
      <p>{item.status}</p>
      <p>{item.link}</p>
    </>
  );
}

export default Item;
