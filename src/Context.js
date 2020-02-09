import React, { useState } from "react";
const Context = React.createContext();
function ContextProvider({ children }) {
  const [draftedNotes, setDraftedNotes] = useState([]);
  const [savedNotes, setSavedNotes] = useState([]);
  const removeNote = removedNote => {
    setDraftedNotes(draftedNotes.filter(note => note !== removedNote));
  };
  return (
    <Context.Provider
      value={{
        draftedNotes,
        setDraftedNotes,
        savedNotes,
        setSavedNotes,
        removeNote
      }}
    >
      {children}
    </Context.Provider>
  );
}
export { Context, ContextProvider };
