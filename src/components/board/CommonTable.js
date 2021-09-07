import React from 'react';
 
const CommonTable = props => {
  const { headersName, children } = props;
 
  return (
      <table className="commonTable">
        <thead>
          <tr>
            {
              headersName.map((item, index) => {
                return (
                  <td className="commonTableHeaderColumn" key={index}>{ item }</td>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            children
          }
        </tbody>
      </table>
  )
}
 
export default CommonTable;