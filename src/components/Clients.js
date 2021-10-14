import React from "react";
import { ClientsContainer, LogoImage, Centered } from "../styles/Clients";

import logo01 from "../assets/logo-01.svg";
import logo02 from "../assets/logo-02.svg";
import logo03 from "../assets/logo-03.svg";
import logo04 from "../assets/logo-04.svg";
import logo05 from "../assets/logo-05.svg";

function Clients() {
  return (
    <>
      <div className="container">
      <Centered>Some of our partners:</Centered>
        <ClientsContainer>
          <LogoImage src={logo01} alt="Logo" />
          <LogoImage src={logo02} alt="Logo" />
          <LogoImage src={logo03} alt="Logo" />
          <LogoImage src={logo04} alt="Logo" />
          <LogoImage src={logo05} alt="Logo" />
        </ClientsContainer>
      </div>
    </>
  );
}

export default Clients;
