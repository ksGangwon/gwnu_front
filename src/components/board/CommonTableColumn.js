import React from 'react';
 
const CommonTableColumn = (props) => {

  const {name} = props;

  return (
    <td className="commonTableColumn" id={name}>
      {
        props.children
      }
    </td>
  )
}
 
export default CommonTableColumn;