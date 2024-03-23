function Table({ tableData }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.location}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;