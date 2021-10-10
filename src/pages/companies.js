import React from "react";
import { Title, Meta } from "react-head";
import GlobalStyle from "../styles/globalStyles";
import HeaderForms from "../components/HeaderForms";
import Footer from "../components/Footer";
import FormCompanies from "../components/FormCompanies";

export default function Home() {
  return (
    <>
      <Title>For Companies</Title>
      <Meta name="description" content="Diversify" />
      <GlobalStyle />
      <HeaderForms />
      <FormCompanies />
      <Footer />
    </>
  );
}