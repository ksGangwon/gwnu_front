import React from 'react';
 
const CommonTableColumn = ({ children }) => {
  return (
    <td className="commonTableColumn">
      {
        children
      }
    </td>
  )
}
 
export default CommonTableColumn;