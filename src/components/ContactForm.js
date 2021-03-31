import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import { navigate } from "gatsby";
const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  padding-left: 2em;
  padding-bottom: 2rem;
`;
const Label = styled.label`
  padding-bottom: 2em;
  font-weight: bold;
  padding-right: 2em;
  @media screen and (min-width: 768px) {
    width: 50%;
    padding-bottom: 1em;
  }
`;
const Text = styled.p`
  padding-top: 1em;
`;
const AreaLabel = styled.label`
  font-weight: bold;
  height: 120px;
  outline: none;
  resize: none;
  overflow: hidden;
  padding-bottom: 2em;
`;
const StringInput = styled.input`
  padding: 1em;
  font-size: 1em;
  padding-left: 1em;
  width: 80%;
  border: solid #e4e4e4 2px;
  border-radius: 12px;
`;
const AreaText = styled.textarea`
  padding: 1rem;
  height 4em;
  width: 80%;
  border: solid #e4e4e4 2px;
  border-radius: 12px;
   width: 80%;
  @media screen and (min-width: 768px) {
    width: 90%;
    padding: 1rem;
  }
`;
const Submit = styled.button`
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 2em;
  padding-right: 2em;
  background-color: #8c6034;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 1.5em;

  width: 80%;
  @media screen and (min-width: 768px) {
    width: 98%;
    padding: 1rem;
  }
`;
const Row = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`;

function ContactForm(props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const options = [
    { value: "Estate Planning", label: "Estate Planning" },
    {
      value: "Trust and Probate Administration",
      label: "Trust and Probate Admininstration",
    },
    {
      value: "Limited Conservatorships and Conservatorships",
      label: "Limited Conservatorships and Conservatorships",
    },
    {
      value: "Beneficiary Representation",
      label: "Beneficiary Representation",
    },
  ];
  const handleSelect = (event) => {
    setArea(event);
  };
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name: name,
        address: address,
        email: email,
        phone: phone,
        time: time,
        area: area,
      }),
    })
      .then(() => navigate("/thankyou"))
      .catch((error) => alert(error));
  };
  return (
    <Form
      id="contact"
      autoComplete="on"
      netlify-honeypot="bot-field"
      name="contact"
      method="POST"
      data-netlify="true"
      action="/thankyou"
      onSubmit={handleSubmit}
    >
      <input name="form-name" value="Netlify Rocks" type="hidden" />
      <input type="hidden" name="bot-field" />
      <Row>
        <Label htmlFor="name">
          <Text>Name</Text> <br></br>
          <StringInput
            type="text"
            name="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></StringInput>
        </Label>
        <Label htmlFor="address">
          <Text>Home Address</Text> <br></br>
          <StringInput
            type="text"
            name="address"
            placeholder="123 Road Name Rd, San Diego Cal"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></StringInput>
        </Label>
      </Row>
      <Row>
        <Label htmlFor="phone">
          <Text>Phone Number</Text> <br></br>
          <StringInput
            type="tel"
            name="phone"
            placeholder="7607012235"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></StringInput>
        </Label>
        <Label htmlFor="email">
          <Text>Email</Text> <br></br>
          <StringInput
            type="email"
            name="name"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></StringInput>
        </Label>
      </Row>
      <Row>
        <Label htmlFor="time">
          <Text>Best Time Too Contact</Text> <br></br>
          <StringInput
            type="text"
            name="time"
            placeholder="Monday-Friday, 3-6pm etc"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          ></StringInput>
        </Label>
        <Label htmlFor="area">
          <Text>Practice Area</Text>
          <br></br>
          <Select
            options={options}
            value={area}
            onChange={handleSelect}
            closeMenuOnScroll="true"
          />
        </Label>
      </Row>
      <AreaLabel htmlFor="description">
        <Text>Message</Text>
        <br></br>
        <AreaText
          name="description"
          rows="4"
          cols="20"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></AreaText>
      </AreaLabel>
      <Submit type="submit" onSubmit={handleSubmit}>
        Submit
      </Submit>
    </Form>
  );
}

export default ContactForm;
