import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "./Context";
const Header = styled.div`
  display: flex;
  align-content: center;
  border: 1px solid;
  margin: 12px 0px 12px 0px;
`;
const Title = styled.h2`
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;
const Indicator = styled.span`
  margin: 0.5rem;
  display: flex;
  padding: 10px;
  background-color: grey;
  justify-self: flex-end;
  border-radius: 40%;
`;
export default () => {
  const { savedNotes } = useContext(Context);
  const countMarkedNotes = savedNotes.filter(note => note.isCardMarked).length;
  return (
    <div className="col-xs-12">
      <Header>
        <Title>React app for Aventica</Title>
        <Indicator>{countMarkedNotes}</Indicator>
      </Header>
    </div>
  );
};
