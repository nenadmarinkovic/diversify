import React from "react";
import { Title, Meta } from "react-head";
import GlobalStyle from "../styles/globalStyles";
import HeaderForms from "../components/HeaderForms";
import Footer from "../components/Footer";
import FormCompanies from "../components/FormCompanies";
import styles from "../styles/styles.css";

export default function Home() {
  return (
    <>
      <Title>For Companies</Title>
      <Meta name="description" content="Avuteq Project" />
      <GlobalStyle />
      <HeaderForms />
      <FormCompanies />
      <Footer />
    </>
  );
}