import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 155px;
  margin-bottom: 95px;

  @media (max-width: 1240px) {
    margin-bottom: -60px;
  }

  @media (max-width: 840px) {
    flex-direction: column;
    padding-top: 100px;
  }
`;
export const BannerImage = styled.img`
  height: 100%;
  width: 635px;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: relative;
  z-index: 2;
  border-top-right-radius: 0;
  margin-bottom: 30px;
`;

export const SVG = styled.svg`
  margin-top: 50px;
  width: 100%;
`;

export const Illustration = styled.div`
  position: relative;
  svg {
    position: absolute;
    bottom: 160px;
    right: -50px;
    width: 120px;
  }
`;

export const Text = styled.div`
  width: 50%;
  margin-right: 20px;
  margin-bottom: 30px;

  @media (max-width: 840px) {
    text-align: center;
    margin-right: 0;
    width: 100%;
  }
`;

export const Button = styled.button`
  background-color: #ed572f;
  border: 2px solid #ed572f;
  font-size: 14px;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  margin-top: 20px;
  text-transform: uppercase;
  transition: 0.3s;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.2);
  padding: 15px;
  :hover {
    cursor: pointer;
    border: 2px solid #ed572f;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
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
    width: 100%;
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
    width: 100%;
  }

  @media (max-width: 560px) {
    font-size: 16px;
  }
`;
