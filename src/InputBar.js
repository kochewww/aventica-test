import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Button } from "./ui/Button";
import { Context } from "./Context";
const InputBar = styled.div`
  border: 1px solid;
  height: 8rem;
  box-sizing: border-box;
  width: 25%;
  display: inline-block;
  margin-top: -10 rem;
`;
const Input = styled.input`
  height: 1rem;
  width: 85%;
  margin: 1rem;
`;
export default () => {
  const {
    setDraftedNotes,

    setSavedNotes
  } = useContext(Context);
  const [text, setText] = useState("");
  const handleChange = e => {
    setText(e.target.value);
    console.log(text);
  };
  const onDraft = e => {
    setDraftedNotes(prevDraftedNotes => [
      ...prevDraftedNotes,
      { text, isCardMarked: false }
    ]);
    e.preventDefault();
    setText("");
  };
  const onSave = e => {
    setSavedNotes(prevSavedNotes => [
      ...prevSavedNotes,
      { text: text, isCardMarked: false }
    ]);
    e.preventDefault();
    setText("");
  };
  return (
    <InputBar>
      <Input onChange={handleChange} type="text" value={text} />
      <Button onClick={onDraft} length="25%">
        Draft
      </Button>
      <Button onClick={onSave} color="green" length="55%">
        Save
      </Button>
    </InputBar>
  );
};
