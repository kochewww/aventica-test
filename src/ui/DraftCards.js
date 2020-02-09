import { Button } from "./Button";
import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../Context";
const TextArea = styled.textarea`
  dispay: flex;
  width: 98%;
`;
const DraftCardWrapper = styled.div`
  display: block;
  box-sizing: border-box;
  margin: 1rem;
`;
export default () => {
  const {
    draftedNotes,
    setDraftedNotes,
    removeNote,
    savedNotes,
    setSavedNotes
  } = useContext(Context);
  const moveToSaved = movedItem => {
    setSavedNotes([...savedNotes, movedItem]);
    setDraftedNotes(draftedNotes.filter(note => note !== movedItem));
  };
  const draftCards = draftedNotes.map((text, i) => (
    <DraftCardWrapper key={i}>
      <TextArea
        value={text}
        onChange={e => {
          draftedNotes[i] = e.target.value;
          setDraftedNotes([...draftedNotes]);
        }}
      ></TextArea>
      <Button
        onClick={() => removeNote(text)}
        color="red"
        length="40%"
        marginTop="-20%"
      >
        Remove
      </Button>
      <Button onClick={() => moveToSaved(text)} color="green" length="30%">
        Save
      </Button>
    </DraftCardWrapper>
  ));
  console.log(draftedNotes);

  return draftCards;
};
