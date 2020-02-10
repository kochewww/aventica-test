import React, { useContext } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Context } from "../Context";
const Wrapper = styled.div`
  display: block;
  min-height: 10rem;
  border: 1px solid;
  margin: 1rem;
  box-sizing: border-box;
  padding: 1rem;
  z-index: 2;
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
  background-color: ${props => props.color || "red"};
  margin-left: 90%;

  display: inline-block;
`;

export default () => {
  const {
    savedNotes,
    draftedNotes,
    setDraftedNotes,
    setSavedNotes
  } = useContext(Context);
  const moveToDraft = movedItem => {
    setDraftedNotes([...draftedNotes, movedItem]);
    setSavedNotes(savedNotes.filter(note => note !== movedItem));
  };

  const setIndicator = isCardMarked => {
    return isCardMarked ? <Indicator color="green" /> : <Indicator />;
  };
  const toggleMark = clickedCard => {
    const updatedCards = savedNotes.map(card => {
      if (card === clickedCard) {
        return { ...card, isCardMarked: !card.isCardMarked };
      }

      return card;
    });
    setSavedNotes(updatedCards);
  };
  const savedCards = savedNotes.map((note, i) => (
    <div className="col-xs-4" key={note + i}>
      <Wrapper>
        {setIndicator(note.isCardMarked)}
        <Text>{note.text}</Text>
        <Button onClick={() => moveToDraft(note)} length="31%" marginLeft="0">
          Draft
        </Button>
        <Button onClick={() => toggleMark(note)} length="50%" marginLeft="1rem">
          Mark
        </Button>
      </Wrapper>
    </div>
  ));
  console.log(savedNotes);
  return savedCards;
};
