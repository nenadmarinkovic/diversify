import styled from "styled-components";

export const Wrap = styled.div`
  background: #e8e9e8;
  margin-top: -90px;

  @media (max-width: 768px) {
    margin-top: -60px;
  }
`;

export const SVGTop = styled.svg`
  margin-top: -380px;
  position: relative;
  z-index: -10;

  @media (max-width: 580px) {
    bottom: 50px;
  }
`;

export const SVGBottom = styled.svg`
  margin-top: -100px;

  @media (max-width: 580px) {
    margin-top: 0;
  }
`;

export const DIV = styled.div`
  width: 1160px;
  max-width: 100%;
  margin: 0 auto;
  padding: 10px 15px 0 15px;

  @media (min-width: 1540px) {
    width: 1200px;
  }
`;

export const AboutContainer = styled.div`
  margin-top: -20px;
  padding-top: 20px;
  padding-bottom: 120px;

  @media (max-width: 580px) {
    margin-top: -60px;
    padding-bottom: 0;
  }
`;

export const CenteredText = styled.div`
  padding: 10px 120px 10px 120px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: #363636;

  @media (max-width: 840px) {
    font-size: 28px;
    padding: 10px 30px 10px 30px;
  }

  @media (max-width: 540px) {
    padding: 10px 0 10px 0;
  }
`;

export const SubText = styled.div`
  text-align: center;
  font-size: 16px;
  letter-spacing: 1.5px;
  font-weight: normal;
  color: #060a14;
  padding-bottom: 30px;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  @media (max-width: 1240px) {
    flex-direction: column;
  }
`;

export const Centered = styled.div`
  padding-top: 80px;
  padding-bottom: 60px;
  font-size: 16px;
  color: #ed572f;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.2px;

  @media (max-width: 1240px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const BigTitle = styled.div`
  font-size: 30px;
  text-align: center;
  border-radius: 10px;
  font-weight: bold;
  padding: 15px;
  background: #ed572f;
  color: white;
`;

export const Startup = styled.div`
  width: 40%;
  @media (max-width: 1240px) {
    width: 100%;
  }
`;

export const Female = styled.div`
  width: 40%;
  @media (max-width: 1240px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  font-size: 23px;
  font-weight: bold;
  margin-top: 35px;
  display: flex;
  align-items: center;
  color: #363636;
`;

export const Paragraph = styled.div`
  font-size: 17px;
  line-height: 1.8;
  margin-top: 10px;
`;
