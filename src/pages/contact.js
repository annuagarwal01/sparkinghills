import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Article from "../components/Article";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";

const Main = styled.main`
  @media screen and (min-width: 768px) {
  }
`;
const Title = styled.h1`
  font-weight: bold;
  color: black;
  font-size: 3rem;
  line-height: 1rem;
  padding-left: 2rem;
  padding-top: 1em;
  @media screen and (min-width: 768px) {
    line-height: 1em;
    padding-top: 0.5em;
  }
  @media screen and (min-width: 1500px) {
    font-size: 5em;
  }
`;
const SubTitle = styled.h3`
  font-weight: bold;
  font-family: "Libre Caslon Text", serif;
  font-size: 1.7em;
  line-height: 1em;
  @media screen and (min-width: 768px) {
    font-size: 2em;
  }
`;
const PcPic = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 30%;
    height: 93vh;
    align-self: center;
  }
  @media screen and (min-width: 1024px) {
  }
`;
const PicWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Row = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`;
const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    width: 30%;
  }
`;
const A = styled.a`
  color: #8c6034;
  font-weight: bold;
  padding-left: ;
`;
const APadding = styled.a`
  color: #8c6034;
  font-weight: bold;
  padding-left: 0.5em;
`;
const Div = styled.div``;
const ContactPage = () => (
  <Layout>
    <Main>
      <PicWrapper>
        <StaticImage
          loading="eager"
          placeholder="blurred"
          src="../images/Contact.png"
          alt="Picture Of Me"
          layout="fullWidth"
        />
      </PicWrapper>
      <Row>
        <Wrapper>
          <Title>Contact</Title>
          <Article>
            <SubTitle>Phone Call</SubTitle> <br></br>
            You can reach my office at +911234567980, Monday – Friday between
            the hours. 8:00am – 5:30pm (PC)
            <br></br>
            <A href="tel:911234567980">+91 1234567980</A>
          </Article>
          <Article>
            <SubTitle>Email Discussion</SubTitle>
            <br></br>
            If you need to contact me through email, you can reach me at:
            <APadding href="mailto: vedron@amphan.com">
              vedron@amphan.com
            </APadding>
          </Article>
        </Wrapper>
        <Div>
          <Article>
            <SubTitle>Schedule A Consultation</SubTitle>
            <br></br>
            Please provide the information below to schedule a consultation.
          </Article>
          <ContactForm />
        </Div>
        <PcPic>
          <StaticImage
            loading="eager"
            placeholder="blurred"
            src="../images/ContactPc.png"
            alt="Picture Of Me"
            objectFit="cover"
          />
        </PcPic>
      </Row>
    </Main>
  </Layout>
);

export default ContactPage;
