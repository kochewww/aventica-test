import React from "react";
import styled from "styled-components";
import SavedCards from "./ui/SavedCards";
const Main = styled.div`
  position: absolute;
  top: 82px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid;
  min-height: 25rem;
  width: 72.1%;
  left: 27%;
`;
export default () => {
  return (
    <Main>
      <SavedCards></SavedCards>
    </Main>
  );
};
