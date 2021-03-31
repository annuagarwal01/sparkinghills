import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Wrapper = styled.div`
  padding-left: 2em;
  padding-bottom: 5em;
`;
const CustomButton = styled.button`
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 2.5em;
  padding-right: 2.5em;
  background-color: #8c6034;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 1.5em;
  @media screen and (min-width: 768px) {
    font-size: 1.8em;
    padding-left: 3em;
    padding-right: 3em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }
`;
function Button({ tag, route }) {
  return (
    <Wrapper>
      <Link to={route}>
        <CustomButton>{tag}</CustomButton>
      </Link>
    </Wrapper>
  );
}

export default Button;
