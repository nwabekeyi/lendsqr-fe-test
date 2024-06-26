

import React from 'react';
import './tableContent.scss';


interface TableContentProps {
  columns: Array<{ header: JSX.Element | string, accessor: string }>;
  data: Array<{ [key: string]: JSX.Element | string | number }>;
}

const TableContent: React.FC<TableContentProps> = ({ columns, data }) => {
  return (
    <div className="table-container container">
      <table className="table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{row[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableContent;

