import React from "react";
import styled from "styled-components";

export default () => {
  const DraftBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border: 1px solid;
    min-height: 16rem;
    max-height: 100%;
    margin-top: -16rem;
  `;
  return (
    <div className="col-xs-3">
      <DraftBar>
        <h3>Draft</h3>
      </DraftBar>
    </div>
  );
};
