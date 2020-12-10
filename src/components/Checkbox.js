import React from "react";

export const Checkbox = (props) => {
  return (
    <li style={{marginRight: "45px", marginLeft: "-3px"}}>
      <input
        onClick={props.handleCheckChieldElement}
        type="checkbox"
        value={props.Value}
        checked={props.Checked}
      />
      <span style={{marginLeft: "5px"}} >{props.Value}</span>
      
    </li>
  );
};

export default Checkbox;
