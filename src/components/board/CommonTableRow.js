import React from 'react';
 
const CommonTableRow = ({ children }) => {
  return (
    <tr className="commonTableRow">
      {
        children
      }
    </tr>
  )
}
 
export default CommonTableRow;