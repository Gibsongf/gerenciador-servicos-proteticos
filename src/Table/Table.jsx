import React from "react";

const Table = ({ header }) => {
  return (
    <table>
      <tr>
        {header.map((h) => (
          <th>{h}</th>
        ))}
      </tr>

      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
    </table>
  );
};

export default Table;
