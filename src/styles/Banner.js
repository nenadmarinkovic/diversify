import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 100px;

  @media (max-width: 1240px) {
    margin-bottom: -60px;
  }

  @media (max-width: 840px) {
    flex-direction: column;
    padding-top: 100px;
  }
`;

export const SVG = styled.svg`
  margin-top: 50px;
  width: 100%;
  @media (max-width: 1240px) {
    margin-top: 30px;
  }

  @media (max-width: 840px) {
    width: 100%;
    margin-top: 60px;
  }

  @media (max-width: 540px) {
    width: 100%;
    margin-top: 20px;
  }

  @media (max-width: 370px) {
    width: 100%;
    margin-top: -30px;
  }
`;

export const Illustration = styled.div`
  @media (max-width: 1240px) {
    margin-right: 40px;
  }

  @media (max-width: 840px) {
    margin-top: -20px;
    margin-right: 40px;
    margin-left: 60px;
  }

  @media (max-width: 640px) {
    margin-top: -80px;
    margin-right: 40px;
    margin-left: 40px;
  }
`;

export const Text = styled.div`
  width: 50%;
  @media (max-width: 1240px) {
    width: 60%;
    margin-right: 30px;
  }

  @media (max-width: 840px) {
    text-align: center;
    width: 80%;
  }
`;

export const Button = styled.button`
  background-color: #ED572F;
  border: 2px solid #ED572F;
  font-size: 14px;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  margin-top: 35px;
  text-transform: uppercase;
  transition: 0.3s;
  box-shadow: 0 10px 30px 0 rgba(0,0,0,.2);
  padding: 15px;
  :hover {
    cursor: pointer;
    border: 2px solid #ED572F;
    box-shadow: 0 0 30px 0 rgba(0,0,0,.2)
  }
  @media (max-width: 1240px) {
    margin-bottom: 30px;
  }
`;

export const MainText = styled.div`
  font-size: 42px;
  font-weight: bold;

  @media (max-width: 960px) {
    font-size: 34px;
  }

  @media (max-width: 840px) {
    text-align: center;
  }

  @media (max-width: 560px) {
    font-size: 32px;
  }
`;
export const SubText = styled.div`
  font-size: 18px;
  margin-top: 10px;
  line-height: 1.8;
  margin-top: 15px;

  @media (max-width: 840px) {
    text-align: center;
  }

  @media (max-width: 560px) {
    font-size: 16px;
  }
`;
