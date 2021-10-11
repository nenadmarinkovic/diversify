import styled from "styled-components";

export const Wrap = styled.div`
  padding-top: 40px;
  padding-bottom: 20px;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 120px;
  padding-top: 30px;

  @media (max-width: 960px) {
    flex-direction: column;
    padding-bottom: 0;
  }
`;

export const Hover = styled.div`
  position: relative;
  height: 100%;

  @media (max-width: 1260px) {
    height: 390px;
  }

  @media (max-width: 768px) {
    height: 290px;
  }

  @media (max-width: 668px) {
    height: 310px;
  }
`;

export const OptionWrapCompanies = styled.div`
  background-image: url(/comp.jpg);
  background-repeat: no-repeat;
  background-size: contain;
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

  @media (max-width: 632px) {
    background-size: cover;
  }

  @media (max-width: 480px) {
    background-size: contain;
  }
`;

export const TextBlock = styled.div`
  position: absolute;
  bottom: -100px;
  left: 0;
  width: 99.5%;
  border: 1px solid #eaeaea;
  border-top: 0;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
`;

export const OptionWrapFemale = styled.div`
  background-image: url(/female.jpg);
  background-repeat: no-repeat;
  background-size: contain;
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

  @media (max-width: 632px) {
    background-size: cover;
  }

  @media (max-width: 480px) {
    background-size: contain;
  }
`;

export const OptionSVG = styled.svg`
  margin-top: 50px;
`;

export const CenteredTitle = styled.div`
  text-align: center;
  padding: 30px 10px 10px;
  font-size: 38px;
  font-weight: bold;
  background: white;

  @media (max-width: 1240px) {
    font-size: 28px;
  }

  @media (max-width: 628px) {
    font-size: 28px;
  }
`;

export const CenteredSubtitle = styled.div`
  text-align: center;
  padding: 0px 10px 35px;
  font-size: 21px;
  background: white;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;

  @media (max-width: 628px) {
    font-size: 18px;
  }
`;

export const OptionItem = styled.div`
  width: 48.5%;
  transition: 0.5s;
  z-index: 1;
  height: 470px;
  position: relative;

  @media (max-width: 960px) {
    width: 60%;
    margin-bottom: 80px;
  }

  @media (max-width: 628px) {
    width: 100%;
  }

  /* @media (max-width: 840px) {
    width: 100%;
  } */
`;
