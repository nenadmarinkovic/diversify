import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 155px;
  margin-bottom: 85px;

  @media (max-width: 1168px) {
    flex-direction: column;
    padding-top: 100px;
  }

  @media (max-width: 1168px) {
    margin-bottom: 15px;
  }
`;

export const BannerImage = styled.img`
  height: 100%;
  width: 635px;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  position: relative;
  z-index: 2;
  border-top-right-radius: 0;
  margin-bottom: 30px;

  @media (max-width: 1340px) {
    width: 435px;
    border-top-right-radius: 20px;
    border-top-left-radius: 0;
  }

  @media (max-width: 1168px) {
    width: 585px;
  }

  @media (max-width: 720px) {
    border-top-left-radius: 18px;
    width: 100%;
  }
`;

export const SVG = styled.svg`
  margin-top: 50px;
  width: 100%;
`;

export const Illustration = styled.div`
  position: relative;

  @media (max-width: 1168px) {
    margin-top: 60px;
  }

  svg {
    position: absolute;
    bottom: 160px;
    right: -50px;
    width: 120px;

    @media (max-width: 1340px) {
      position: absolute;
      bottom: 30px;
      left: -50px;
      width: 120px;
      transform: rotate(-90deg);
    }

    @media (max-width: 1168px) {
      bottom: 130px;
    }

    @media (max-width: 720px) {
      display: none;
    }
  }
`;

export const Text = styled.div`
  width: 50%;
  margin-right: 20px;
  margin-bottom: 30px;

  @media (max-width: 1168px) {
    text-align: center;
    margin-right: 0;
    width: 100%;
  }

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
  color: #363636;

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
  color: #363636;

  @media (max-width: 840px) {
    text-align: center;
    width: 100%;
  }

  @media (max-width: 560px) {
    font-size: 16px;
  }
`;
