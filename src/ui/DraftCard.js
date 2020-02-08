import { Button } from "./Button";
import React from "react";
import styled from "styled-components";
export default () => {
  const TextArea = styled.textarea`
    dispay: flex;
    width: 98%;
  `;
  const DraftCardWrapper = styled.div`
    display: block;
    box-sizing: border-box;
    margin: 1rem;
  `;
  return (
    <DraftCardWrapper>
      <TextArea>Text</TextArea>
      <Button color="red" length="40%" marginTop="-20%">
        Remove
      </Button>
      <Button color="green" length="30%">
        Save
      </Button>
    </DraftCardWrapper>
  );
};
