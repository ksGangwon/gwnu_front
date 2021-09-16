import React, { useEffect } from 'react';
import {useHistory} from "react-router-dom";

const CommonTableRow = (props) => {

  const history = useHistory();
  const {id,divide} = props;

  return (
    <>
      {id!==undefined?(
      <tr className="commonTableRow" onClick={() => {history.push({
        pathname: `/Detail/${divide}/${id}`
      })}}>
        {
          props.children
        }
      </tr>):
      <tr className="commonTableRow">
        {
          props.children
        }
      </tr>
      }
    </>
  )
}
 
export default CommonTableRow;