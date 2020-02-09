import React from "react";
import styled from "styled-components";
import SavedCards from "./ui/SavedCards";
const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid;
  min-height: 25rem;
  width: 100%;
`;
export default () => {
  return (
    <div className="col-xs-9">
      <Main>
        <SavedCards></SavedCards>
      </Main>
    </div>
  );
};
