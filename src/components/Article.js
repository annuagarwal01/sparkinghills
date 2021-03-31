import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
  line-height: 1.5em;
  padding-top: 1em;
  @media screen and (min-width: 768px) {
    padding-bottom: 2em;
  }
`;
const Title = styled.h2`
  font-weight: bold;
  padding-bottom: 1em;
  font-size: 2.3em;
  line-height: 1.3em;
  @media screen and (min-width: 768px) {
    font-size: 3em;
    padding-bottom: 0.5em;
    line-height: 1.2em;
  }
`;
const Text = styled.div`
  font-size: 1.2em;
  line-height: 2em;
  @media screen and (min-width: 768px) {
    line-height: 2em;
  }
`;

function Article(props) {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Text>{props.children}</Text>
    </Wrapper>
  );
}

export default Article;
