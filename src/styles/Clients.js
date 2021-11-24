import styled from "styled-components";

export const ClientsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 120px;
  padding-top: 20px;
  flex-wrap: wrap;
  transition: 0.5s;

  @media (max-width: 1168px) {
    justify-content: center;
  }

  @media (max-width: 960px) {
    justify-content: center;
  }

  @media (max-width: 560px) {
    justify-content: space-around;
  }
`;

export const LogoImage = styled.img`
  width: 160px;

  @media (max-width: 1168px) {
    padding: 30px;
  }

  @media (max-width: 560px) {
    width: 130px;
    padding: 10px;
  }
  @media (max-width: 420px) {
    width: 130px;
    padding: 30px;
  }
`;

export const Centered = styled.div`
  padding-top: 10px;
  padding-bottom: 30px;
  font-size: 16px;
  color: #ed572f;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.2px;

  @media (max-width: 1240px) {
    padding-top: 80px;
    padding-bottom: 30px;
  }
`;
