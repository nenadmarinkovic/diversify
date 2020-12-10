import React from "react";
import { Title, Meta } from "react-head";
import GlobalStyle from "../styles/globalStyles";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Option from "../components/Option";
import Footer from "../components/Footer";
import Project from "../components/Project";

import styles from "../styles/styles.css";

export default function Home() {
  return (
    <>
      <Title>Diversify by Avuteq</Title>
      <Meta name="description" content="Avuteq Project" />
      <GlobalStyle />
      <Header />
      <Banner />
      <About />
      <Option />
      <Project />
      <Footer />
    </>
  );
}
