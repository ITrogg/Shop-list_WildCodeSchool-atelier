function Row({ item }) {
  return (
    <tr className="item-row">
      <td className="title">{item.title}</td>
      <td className="label">{item.category}</td>
      <td className="label">{item.status}</td>
      <td className="optional">
        {!item.link ? "" : <a href={item.link}>Link</a>}
      </td>
    </tr>
  );
}

export default Row;
