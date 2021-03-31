import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Nav from "./Nav";
import { Link } from "gatsby";
const Wrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 50;
  flex-flow: column nowrap;
  padding-left: 2em;
  padding-top: 2em;
  background: black;
  color: white;
  @media screen and (min-width: 768px) {
    flex-flow: row nowrap;
    padding-top: 0em;
    padding-right: 1em;
  }
`;
const ContainerTop = styled.div`
  display: flex;
`;
const Text = styled.div`
  margin-left: 1em;
  color: white;
`;
const Title = styled.h2`
  font-weight: bold;
  font-size: 1.3em;
  padding-bottom: 5px;
  @media screen and (min-width: 768px) {
    font-size: 1.5em;
  }
`;
const Tag = styled.p`
  font-size: 0.7em;
`;
const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  @media screen and (min-width: 768px) {
    width: 40%;
    display: flex;
    align-items: center;
  }
`;

function Header(props) {
  return (
    <Wrapper>
      <StyledLink to="/">
        <ContainerTop>
          <StaticImage
            src="../images/icon.png"
            alt="Tree Logo"
            loading="eager"
            placeholder="blurred"
            layout="fixed"
            width={40}
            height={40}
          />
          <Text>
            <Title>SapnoSphesis</Title>
            <Tag>Safe play with us</Tag>
          </Text>
        </ContainerTop>
      </StyledLink>
      <Nav />
    </Wrapper>
  );
}

export default Header;
