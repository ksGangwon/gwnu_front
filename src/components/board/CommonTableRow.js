import React from 'react';
import {useHistory} from "react-router-dom";

const CommonTableRow = (props) => {

  const history = useHistory();

  return (
    <tr className="commonTableRow" onClick={() => {history.push({
      pathname: `/Detail/${props.id}`
    })}}>
      {
        props.children
      }
    </tr>
  )
}
 
export default CommonTableRow;