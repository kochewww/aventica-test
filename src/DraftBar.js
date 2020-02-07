import React from "react";
import styled from "styled-components";

export default () => {
  const DraftBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid;
    min-height: 16rem;
    max-height: 100%;
    margin-top: -16rem;
  `;
  const Header = styled.h3`
    display: flex;
  `;
  const TextArea = styled.textarea`
    dispay: flex;
  `;
  const TextCard = styled.div`
    display: flex;
    margi: 1rem;
  `;
  return (
    <div className="col-xs-3">
      <DraftBar>
        <Header>Draft</Header>
        <TextCard>
          <TextArea></TextArea>
        </TextCard>
      </DraftBar>
    </div>
  );
};
