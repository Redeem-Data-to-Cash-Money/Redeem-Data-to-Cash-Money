import React from 'react';

const DataList = ({ dataItems }) => {
  return (
    <div>
      <h2>Redeemable Data</h2>
      <table>
        <thead>
          <tr>
            <th>Data Amount</th>
            <th>Commission (20%)</th>
          </tr>
        </thead>
        <tbody>
          {dataItems.map((item, index) => (
            <tr key={index}>
              <td>{item.amount} {item.unit}</td>
              <td>{item.amount * 0.2} Naira</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataList;
