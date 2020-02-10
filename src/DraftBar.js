import React from "react";
import styled from "styled-components";
import DraftCards from "./ui/DraftCards";
const DraftBar = styled.div`
  display: block;
  width: 25%;

  border: 1px solid;
  min-height: 16rem;
  max-height: max-content;
  margin-top: 1rem;
`;
const Header = styled.h3`
  display: flex;
  margin: 1rem;
`;

export default () => {
  return (
    <DraftBar>
      <Header>Draft</Header>
      <DraftCards />
    </DraftBar>
  );
};
