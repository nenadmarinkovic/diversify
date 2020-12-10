import React from "react";
import { Title, Meta } from "react-head";
import GlobalStyle from "../styles/globalStyles";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Options from "../components/Options";
import Footer from "../components/Footer";
import Project from "../components/Project";

import styles from "../styles/styles.css";

export default function Home() {
  return (
    <>
      <Title>Diversify by Avuteq</Title>
      <Meta name="description" content="Diversify" />
      <GlobalStyle />
      <Header />
      <Banner />
      <About />
      <Options />
      <Project />
      <Footer />
    </>
  );
}
