function Row({ item }) {
  return (
    <tr>
      <td>{item.title}</td>
      <td>{item.category}</td>
      <td>{item.status}</td>
      <td>{item.link}</td>
    </tr>
  );
}

export default Row;
