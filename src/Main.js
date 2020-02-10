import React from "react";
import styled from "styled-components";
import SavedCards from "./ui/SavedCards";
const Main = styled.div`
  position: absolute;
  top: 93px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid;
  min-height: 25rem;
  width: 63%;
  left: 29.5%;
`;
export default () => {
  return (
    <Main>
      <SavedCards></SavedCards>
    </Main>
  );
};
