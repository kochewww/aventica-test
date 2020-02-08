import styled from "styled-components";
export const Button = styled.button`
  background: ${props => props.color || "grey"};
  height: ${props => props.height || "2rem"};
  width: ${props => props.length || "3rem"};
  margin-top: ${props => props.marginTop || ""};
  margin-left: ${props => props.marginLeft || "7%"};
  border: none;
  overflow: hidden;
  font-size: ${props => props.fontSize || "1rem"};
`;
