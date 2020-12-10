import React from "react";
import { CenteredFooter, Wrap, Created } from "../styles/Footer";

function Footer() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#E8E9E8"
          fill-opacity="1"
          d="M0,192L120,208C240,224,480,256,720,272C960,288,1200,288,1320,288L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <Wrap>
        <div className="container">
          <CenteredFooter>
            © {new Date().getFullYear()} Diversify by Avuteq
          </CenteredFooter>
          <Created>
            Design and development:{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://nenadmarinkovic.com"
            >
              nenadmarinkovic.com
            </a>
          </Created>
        </div>
      </Wrap>
    </>
  );
}

export default Footer;
