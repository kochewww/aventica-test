import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
const Wrapper = styled.div`
  display: block;
  min-height: 10rem;
  border: 1px solid;
  margin: 1rem;
  box-sizing: border-box;
  word-wrap: break-word;
  padding: 1rem;
`;
const Text = styled.span`
  min-height: 8rem;
  height: 100%;
  width: 85%;
  display: inline-block;
  margin-top: -15%;
`;
const Indicator = styled.div`
  height: 1rem;
  width: 1rem;
  background-color: green;
  margin-left: 90%;

  display: inline-block;
`;
export default () => {
  return (
    <div className="col-xs-4">
      <Wrapper>
        <Indicator></Indicator>
        <Text>Text</Text>
        <Button length="31%" marginLeft="0">
          Draft
        </Button>
        <Button length="50%" marginLeft="1rem">
          Mark
        </Button>
      </Wrapper>
    </div>
  );
};
