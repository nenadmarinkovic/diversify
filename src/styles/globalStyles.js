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

html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: 'Proxima Nova', serif;
}
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  h1, h3, h6 {
    margin: 0
  }

  li, ul {
    list-style-type: none;
    margin: 0;
    
  }

  .container {
    width: 1200px;
    max-width: 100%;
    margin: 0px auto;
    padding: 0 20px;
  }

  .container-form {
    width: 600px;
    max-width: 100%;
    margin: 0px auto;
    padding: 0 20px;
  }

  .logo-image {
    width: 23%
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
    color: black;
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

`;

export default GlobalStyle;
