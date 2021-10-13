import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Proxima Nova';
    src: url('fonts/ProximaNovaBold.woff2') format('woff2'),
        url('fonts/ProximaNovaBold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url('fonts/ProximaNovaThin.woff2') format('woff2'),
        url('fonts/ProximaNovaThin.woff') format('woff');
    font-weight: light;
    font-style: normal;
   
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url('fonts/ProximaNovaRegular.woff2') format('woff2'),
        url('fonts/ProximaNovaRegular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
   
  }

  input:invalid {
    box-shadow: none;
}

html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    font-family: 'Proxima Nova', serif;
}

  body {
    margin: 0;
    padding: 0;
  
  }

  h1, h3, h6 {
    margin: 0
  }

  li, ul {
    list-style-type: none;
    margin: 0;
    
  }

  .container {
    width: 1160px;
    max-width: 90%;
    margin: 0 auto;
    padding: 10px 15px 0 15px;

    @media (min-width: 1540px) {
      width: 1200px;
    }
  }

  .about-container {
    width: 1160px;
    max-width: 90%;
    margin: 0 auto;
    padding: 10px 15px 0 15px;

    @media (min-width: 1540px) {
      width: 1200px;
    }
  }

  .header-container {
    width: 1160px;
    max-width: 90%;
    margin: 0 auto;
    padding: 10px 15px 0 15px;

    @media (min-width: 1540px) {
      width: 1200px;
    }
  }

  .container-form {
    width: 600px;
    max-width: 100%;
    margin: 0px auto;
    padding: 0 20px;
  }

  .logo-image {
    width: 138px;
    height: 35px;
  }

  .no-mr {
    margin-right: 0 !important;
   

    @media (max-width: 840px) {
      margin-left: 0 !important;
      margin-right: 0 !important;
      margin-top: 30px;
     }
  }

  .no-ml {
    margin-left: 0 !important;
   

    @media (max-width: 840px) {
      margin-left: 0 !important;
      margin-right: 0 !important;
      margin-top: 30px;
     }
  }

  .no-mr {
    margin-right: 0 !important;
    @media (max-width: 840px) {
      margin-left: 0 !important;
      margin-right: 0 !important;
     margin-top: 30px;
    }
  }

  .small-resolution-margin {
    @media (max-width: 1240px) {
      margin-top: 80px;
     }
  }

  .container-full {
    max-width: 100%;
    margin: 0px auto;
  }

  a {
    color: #363636;
    text-decoration: none;
    transition: .3s;
    :hover {
      color: #ED572F;
    }
  }

  .moveOne {
    animation-direction:alternate;
    transform: translate(-.4cm);
    transition: all 1.5s;
    -webkit-transition: all 1.5s;
  }

  .moveTwo{
    animation-direction:alternate;
    transform: translateY(-.4cm);
    transition: all 1.5s;
   -webkit-transition: all 1.5s; 
  }

  .moveThree { 
    animation-direction:alternate;
    transform: translateY(-.4cm);
    transition: all 1.5s;
    -webkit-transition: all 1.5s;
   
  }

  .moveFour { 
    animation-direction:alternate;
    transform: translateY(.4cm);
    transition: all 1.5s;
    -webkit-transition: all 1.5s;
   
  }

  .colorYellow {
    fill: #E9EC5B;
  }

  /* Position and sizing of burger button */
.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  right: 36px;
  top: 18px;
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: #373a47;
  position: absolute;
  height: 3px !important;
  width: 30px !important;
  border-radius: 5px !important;
  left: 0px;
  right: 0px;
  top: 0%;
  opacity: 1;
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: #a90000;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 24px;
  width: 24px;
}

/* Color/shape of close button cross */
.bm-cross {
  background: #363636;
}

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  height: 100%;
  top: 0;
  width: 260px !important;
}

/* General sidebar styles */
.bm-menu {
  background: white;
  border-left: 1px solid #EAEAEA;
  padding: 1.5em;
  font-size: 1.15em;

}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: #363636;
  padding: 0.1em;
}

/* Individual item */
.bm-item {
  display: inline-block;
  margin-top: 40px;
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
  width: unset !important;
}

`;

export default GlobalStyle;
