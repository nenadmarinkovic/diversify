import React from "react";
import { Title, Meta } from "react-head";
import GlobalStyle from "../styles/globalStyles";
import Header from "../components/Header";

import NotFoundBanner from "../components/NotFoundBanner";
import Footer from "../components/Footer";

import styles from "../styles/styles.css";

export default function NotFound() {
  return (
    <>
      <Title>Diversify by Avuteq</Title>
      <Meta name="description" content="Diversify" />
      <GlobalStyle />
      <Header />
      <NotFoundBanner />
      <Footer />
    </>
  );
}
