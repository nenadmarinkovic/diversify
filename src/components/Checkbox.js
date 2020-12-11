import React from "react";

import styled from "styled-components";

export const List = styled.li`
  margin-right: 45px;
  margin-left: -3px;

  @media (max-width: 1240px) {
    margin-left: 0;
    margin-right: 15px;
  }
`;

export const Checkbox = (props) => {
  return (
    <List>
      <input
        onClick={props.handleCheckChieldElement}
        type="checkbox"
        value={props.Value}
        checked={props.Checked}
      />
      <span style={{ marginLeft: "5px" }}>{props.Value}</span>
    </List>
  );
};

export default Checkbox;
