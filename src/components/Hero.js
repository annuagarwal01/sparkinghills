import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Wrapper = styled.div`
  padding-bottom: 2em;
`;
const StyledBackgroundImage = styled((props) => <BackgroundImage {...props} />)`
  background-size: 100% 100%;
  height: 100vh;
`;
const StyledLink = styled((props) => <Link {...props} />)`
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;
const CustomButton = styled.button`
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-right: 2rem;
  padding-left: 2rem;
  background-color: #8c6034;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  width: 60%;
  @media screen and (min-width: 768px) {
    width: 25%;
    font-size: 2em;
  }
`;
const Text = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  justify-content: center;
  padding-top: 5em;
  @media screen and (min-width: 768px) {
    padding-top: 8em;
  }
`;
const Title = styled.h1`
  color: white;
  font-weight: bold;
  padding-bottom: 2em;
  @media screen and (min-width: 768px) {
    font-size: 6em;
  }
`;

function Hero(props) {
  const { placeholderImage } = useStaticQuery(
    graphql`
      {
        placeholderImage: file(relativePath: { eq: "Hero.png" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );

  const image = getImage(placeholderImage);
  const bgImage = convertToBgImage(image);

  return (
    <Wrapper>
      <StyledBackgroundImage
        Layout="fullWidth"
        Tag="section"
        // Spread bgImage into BackgroundImage:
        {...bgImage}
        preserveStackingContext
      >
        <Text>
          <Title>
            Your Legacy.
            <br />
            My Priority.
          </Title>
          <StyledLink to="/contact">
            <CustomButton>Contact Me</CustomButton>
          </StyledLink>
        </Text>
      </StyledBackgroundImage>
    </Wrapper>
  );
}
export default Hero;
