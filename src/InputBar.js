import React from "react";
import styled from "styled-components";

export default () => {
  const InputBar = styled.div`
    display: block;
    justify-content: center;
    align-content: center;
    border: 1px solid;
    height: 8rem;
  `;
  return (
    <div className="col-xs-3">
      <InputBar></InputBar>
    </div>
  );
};
