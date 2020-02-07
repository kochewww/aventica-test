import React from "react";
import styled from "styled-components";

export default () => {
  const InputBar = styled.div`
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    border: 1px solid;
    height: 8rem;
    box-sizing: border-box;
  `;
  const Input = styled.input`
    display: flex;
    margin: 1rem;
    height: 1rem;
  `;
  const Button = styled.button`
    dispay: flex;
    background: ${props => props.color || "grey"};
    height: 2rem;
    width: ${props => props.length || "3rem"};
    position: absolute;
    margin-top: 3rem;
    margin-left: ${props => props.marginLeft || "1rem"};
    border: none;
  `;
  return (
    <div className="col-xs-3">
      <InputBar>
        <Input />
        <Button>Draft</Button>
        <Button marginLeft="5rem" color="green" length="8.5rem">
          Save
        </Button>
      </InputBar>
    </div>
  );
};
