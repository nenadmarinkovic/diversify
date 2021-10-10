import React from "react";
import { Title, Meta } from "react-head";
import GlobalStyle from "../styles/globalStyles";
import HeaderForms from "../components/HeaderForms";
import Footer from "../components/Footer";
import Form from "../components/Form";

export default function Home() {
  return (
    <>
      <Title>For Female Professionals</Title>
      <Meta name="description" content="Diversify" />
      <GlobalStyle />
      <HeaderForms />
      <Form />
      <Footer />
    </>
  );
}
