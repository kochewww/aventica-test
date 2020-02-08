import React from "react";
import styled from "styled-components";
import { Button } from "./ui/Button";
export default () => {
  const InputBar = styled.div`
    border: 1px solid;
    height: 8rem;
    box-sizing: border-box;
  `;
  const Input = styled.input`
    height: 1rem;
    width: 85%;
    margin: 1rem;
  `;

  return (
    <div className="col-xs-3">
      <InputBar>
        <Input />
        <Button length="25%">Draft</Button>
        <Button color="green" length="55%">
          Save
        </Button>
      </InputBar>
    </div>
  );
};
