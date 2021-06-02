import styled from "styled-components";

export const Wrap = styled.div`
  padding-top: 40px;
  padding-bottom: 20px;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 840px) {
    flex-direction: column;
  }
`;



export const OptionWrap = styled.div`
  border-radius: 18px;
  border: 1px solid #eaeaea;
  margin: 20px;
  height: 400px;
  transition: 0.3s;
  text-align: center;

  :hover {
    box-shadow: 0 10px 30px 0 rgba(0,0,0,.2);
    cursor: pointer;
  }

  @media (max-width: 840px) {
    height: 400px;
   
  }

  @media (max-width: 370px) {
    height: 470px;
   
  }
`;

export const OptionSVG = styled.svg`
 margin-top: 50px
`;

export const CenteredTitle = styled.div`
  text-align: center;
  padding: 30px 10px 10px;
  font-size: 33px;
  font-weight: bold;
  margin-top: 20px;

  @media (max-width: 1240px) {
    font-size: 28px;
  }
`;

export const CenteredSubtitle = styled.div`
  text-align: center;
  padding: 30px 20px 10px;
  font-size: 23px;

  @media (max-width: 1240px) {
    font-size: 28px;
  }
`;

export const OptionItem = styled.div`
  width: 50%;
  transition: 0.5s;
  @media (max-width: 840px) {
    width: 100%;
  }
`;

export const SVG = styled.svg`
  text-align: center;
  margin-right: 40px;
  margin-top: 15px;
  transition: 0.5s;
  @media (max-width: 1240px) {
    width: 90%;
  }

  @media (max-width: 840px) {
    width: 100%;
    padding-bottom: 30px;
  }

  @media (max-width: 540px) {
    width: 70%;
    padding-bottom: 0;
    margin-right: 0px;
  }
`;

export const SVGStartup = styled.svg`
  transition: 0.5s;
  @media (max-width: 1240px) {
    width: 90%;
  }

  @media (max-width: 840px) {
    width: 100%;
    padding-bottom: 30px;
  }

  @media (max-width: 540px) {
    width: 70%;
    padding-bottom: 0;
  }
`;
