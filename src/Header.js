import React from "react";
import styled from "styled-components";

export default () => {
  const Header = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    border: 1px solid;
    margin: 12px 0px 12px 0px;
  `;
  return (
    <div className="col-xs-12">
      <Header>
        <h2>React app for Aventica</h2>
      </Header>
    </div>
  );
};
