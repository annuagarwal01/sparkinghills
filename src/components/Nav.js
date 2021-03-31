import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Phone from "../images/Ui/Phone.svg";
const Navigation = styled.nav`
  padding-top: 2em;
  font-family: "Noto Sans JP", serif;
  display: flex;
  justify-content: space-around;
  padding-bottom: 2em;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding-left: 2em;
  }
`;

const Div = styled.div`
  display: flex;
  flex-grow: 3;
  font-size: 16px;
  justify-content: space-between;
  padding-right: 16px;
`;
const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  color: white;
  font-size: 15px;
  @media screen and (min-width: 768px) {
    font-size: 1.1em;
  }
`;

function Nav(props) {
  return (
    <Navigation>
      <Div>
        <StyledLink
          to="/about"
          activeClassName="active"
          activeStyle={{ color: "#ffd75f" }}
        >
          About
        </StyledLink>
        <StyledLink to="/services" activeStyle={{ color: "#ffd75f" }}>
          Practice Areas
        </StyledLink>
        <StyledLink to="/contact" activeStyle={{ color: "#ffd75f" }}>
          Contact Me
        </StyledLink>
        <StyledLink to="/">
          <Phone />
        </StyledLink>
      </Div>
    </Navigation>
  );
}

export default Nav;
