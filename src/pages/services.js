import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Article from "../components/Article";
import styled from "styled-components";
import Button from "../components/Button";
import Layout from "../components/Layout";
import PracticeFooter from "../components/PracticeFooter";
const Title = styled.h1`
  font-weight: bold;
  color: black;
  font-size: 2.5em;
  line-height: 1em;
  padding-top: 2rem;
  padding-left: 2rem;
  @media screen and (min-width: 768px) {
    padding-top: 0;
  }
`;
const Block = styled.div`
  margin-bottom: 5em;
`;
const SubTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5em;
  line-height: 1em;
`;
const Row = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
    margin-top: 2em;
    flex-direction: row-reverse;
  }
`;
const RowBottom = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
    margin-top: 2em;
    flex-direction: reverse-row;
    justify-content: center;
  }
`;
const Text = styled.div`
  @media screen and (min-width: 768px) {
    flex-direction: reverse-row
    display: flex;
    flex-flow: column nowrap;
    width: 50%;
    padding-right:5%;
  }
`;
const TextBottom = styled.div`
  @media screen and (min-width: 768px) {
    flex-direction: reverse-row
    display: flex;
    flex-flow: column nowrap;
    padding-left: 2em;
    width: 60%;
  }
    
   @media screen and (min-width: 1500px) {
    padding-top:5em;
  }
`;
const PicWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const PcPic = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 40%;
    padding-right: 2em;
  }
  @media screen and (min-width: 1024px) {
    height: 1000px;
  }
`;
const ServicesPage = () => (
  <Layout>
    <main>
      <Row>
        <PicWrapper>
          <StaticImage
            loading="eager"
            placeholder="blurred"
            src="../images/Practice.png"
            alt="Picture Of Me"
            objectFit="cover"
          />
        </PicWrapper>
        <PcPic>
          <StaticImage
            loading="eager"
            placeholder="blurred"
            src="../images/Service.png"
            alt="Keyboard"
            objectFit="constrained"
          />
        </PcPic>
        <Text>
          <Title>Practice Areas</Title>
          <Article>
            <SubTitle>Estate Planning</SubTitle>
            <br />
            <p>
              In this process, we will not only address your financial assets,
              but also your intellectual, spiritual, and human assets: who you
              are and what is important to you and how you can leave a legacy of
              love that goes far beyond money.
            </p>
            I will help you plan how you want to pass on your Family Wealth.
          </Article>
          <Article>
            <SubTitle>Trust and Probate Admininstration</SubTitle> <br />I can
            handle all of the legal matters related to opening probate and to
            distributing and disbursing a trust.
          </Article>
          <Article>
            <SubTitle>Limited Conservatorships and Conservatorships</SubTitle>
            <br />
            In cases where a family member turns 18, but still requires legal
            representation, I can provide this service and make sure that things
            happen the way they are supposed to.
          </Article>
          <Article>
            <SubTitle>Beneficiary Representation</SubTitle> <br />I can help
            make sure that inheritances are secured by making sure that there is
            proper notification and representation. Likewise, I can handle any
            disagreement or conflicts that may arise in the process.
          </Article>
        </Text>
      </Row>
      <Block />
      <RowBottom>
        <TextBottom>
          <Article title="We Can Protect Your Family">
            To begin the process of protecting your family, please contact me
            for an initial consultation. I can answer any questions you might
            have and explain how we can get started protecting your legacy.
          </Article>
          <Button tag="Contact Me" route="/contact" />
        </TextBottom>
        <PracticeFooter />
      </RowBottom>
    </main>
  </Layout>
);
export default ServicesPage;
