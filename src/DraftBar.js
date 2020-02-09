import React from "react";
import styled from "styled-components";
import DraftCards from "./ui/DraftCards";
const DraftBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid;
  min-height: 16rem;
  max-height: max-content;
  margin-top: -16rem;
`;
const Header = styled.h3`
  display: flex;
  margin: 1rem;
`;

export default () => {
  return (
    <div className="col-xs-3">
      <DraftBar>
        <Header>Draft</Header>
        <DraftCards />
      </DraftBar>
    </div>
  );
};
