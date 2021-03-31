import React from "react";
import Header from "./Header";
import "../static/cssReset.css";
import "../static/global.css";
import styled from "styled-components";
const Wrapper = styled.div``;
export default function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}
