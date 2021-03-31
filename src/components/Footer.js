import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { getImage } from "gatsby-plugin-image";
const StyledBackgroundImage = styled((props) => <BackgroundImage {...props} />)`
  height: 50vh;
  @media screen and (min-width: 768px) {
    width: 60vw;
    height: 35vw;
  }
`;
const Wrapper = styled.div`
  display: flex;
  font-size: 0.7em;
  height: 100%;
  width: 100%;
  flex-direction: row nowrap;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    font-size: 1em;
  }
`;
const LeftList = styled.ul`
  align-self: flex-end;
  line-height: 1.7em;
  color: white;
  padding-left: 3em;
  padding-bottom: 1em;
`;
const RightList = styled.ul`
  align-self: flex-end;
  line-height: 1.7em;
  color: white;
  padding-right: 3em;
  padding-bottom: 1em;
`;
const LI = styled.li``;
const A = styled.a`
  color: white;
`;

function Footer(props) {
  const { placeholderImage } = useStaticQuery(
    graphql`
      {
        placeholderImage: file(relativePath: { eq: "Footer.jpg" }) {
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
    <StyledBackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
    >
      <Wrapper>
        <LeftList>
          <LI>PO Box</LI>
          <LI>Califorina,</LI>
        </LeftList>
        <RightList>
          <LI>
            <A href="tel:9649310039">+91 1234567890</A>
          </LI>
          <LI>
            <A href="mailto: vedron@SapnoSphesis.com">
              vedron@SapnoSphesis.com
            </A>
          </LI>
          <LI>Dakshita , Safe play</LI>
          <LI>safe play and enjoy</LI>
        </RightList>
      </Wrapper>
    </StyledBackgroundImage>
  );
}

export default Footer;
