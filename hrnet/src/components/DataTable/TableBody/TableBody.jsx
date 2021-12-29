import React from 'react'

function TableBody({tabledata, columns}) {
    return (
      <tbody>
        {tabledata.map((el, index) => {
          return (
            <tr
              key={`${el.firstName}-${el.lastName}-${index}`}
              className={`${index % 2 === 0 ? "odd" : "even"}`}
            >
              {columns.map((col) => {
                return <td key={`${col.title}-${col.data}`}>{el[col.data]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    );
}

export default TableBody
