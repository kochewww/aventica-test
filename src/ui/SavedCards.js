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
  // const addProp = () =>
  //   savedNotes.forEach(element => {
  //     element.isCardMarked = false;
  //   });
  // addProp();
  const setIndicator = isCardMarked => {
    return isCardMarked ? <Indicator color="green" /> : <Indicator />;
  };
  const toggleMark = clickedCard => {
    const updatedCards = savedNotes.map(card => {
      if (card.text === clickedCard.text) {
        return { ...card, isCardMarked: !card.isCardMarked };
      }

      return card;
    });
    setSavedNotes(updatedCards);
    // isCardMarked
    //   ? setMarkedCards(markedCards + 1)
    //   : setMarkedCards(markedCards - 1);
  };
  const savedCards = savedNotes.map(note => (
    <div className="col-xs-4" key={note.text}>
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
