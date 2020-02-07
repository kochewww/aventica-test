import React from "react";
import Header from "./Header";
import InputBar from "./InputBar";
import DraftBar from "./DraftBar";
import Main from "./Main";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Header />

        <InputBar />
        <Main />
        <DraftBar />
      </div>
    </div>
  );
}

export default App;
