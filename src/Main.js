import React from "react";
import styled from "styled-components";
const Main = styled.div`
  display: flex;

  justify-content: center;
  align-items: flex-start;
  border: 1px solid;
  min-height: 25rem;
  width: 100%;
`;
export default () => {
  return (
    <div className="col-xs-9">
      <Main />
    </div>
  );
};
