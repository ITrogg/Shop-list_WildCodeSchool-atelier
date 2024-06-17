function Row({ item }) {
  return (
    <tr>
      <td>{item.product_name}</td>
      <td>{item.category_id}</td>
      <td>{item.status_id}</td>
      <td>{item.link_to}</td>
    </tr>
  );
}

export default Row;
