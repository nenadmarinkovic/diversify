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

export const Hover = styled.div`
  position: relative;
  height: 100%;
`;

export const OptionWrapCompanies = styled.div`
  background: url(/comp.jpg);
  min-height: 470px;
  background-repeat: no-repeat;
  background-size: 100% 470px;
  border-radius: 18px;
  border: 1px solid #eaeaea;
  transition: 0.5s;
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.5;

  ${Hover}:hover & {
    opacity: 1;
  }

  :hover {
    opacity: 1;
  }
`;

export const TextBlock = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  width: 450px;
`;

export const OptionWrapFemale = styled.div`
  background: url(/female.jpg);
  min-height: 470px;
  background-repeat: no-repeat;
  background-size: 100% 470px;
  border-radius: 18px;
  border: 1px solid #eaeaea;
  transition: 0.5s;
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.5;

  ${Hover}:hover & {
    opacity: 1;
  }

  :hover {
    opacity: 1;
  }
`;

export const OptionSVG = styled.svg`
  margin-top: 50px;
`;

export const CenteredTitle = styled.div`
  text-align: start;
  padding: 30px 10px 10px;
  font-size: 38px;
  font-weight: bold;
  background: white;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;

  @media (max-width: 1240px) {
    font-size: 28px;
  }
`;

export const CenteredSubtitle = styled.div`
  text-align: start;
  padding: 0px 10px 35px;
  font-size: 21px;
  background: white;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;

  @media (max-width: 1240px) {
    font-size: 28px;
  }
`;

export const OptionItem = styled.div`
  width: 48.5%;
  transition: 0.5s;
  z-index: 1;
  height: 470px;
  position: relative;

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
