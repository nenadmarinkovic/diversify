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

export const OptionWrapCompanies = styled.div`
  background: url(/companies.jpg);
  min-height: 555px;
  background-repeat: no-repeat;
  background-size: 100% 400px;
  background-position: center top;
  position: relative;
  border-radius: 18px;
  border: 1px solid #eaeaea;
  margin: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  transition: 0.5s;

  :hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

`;

export const OptionWrapFemale = styled.div`
  background: url(/female.jpg);
  min-height: 555px;
  background-repeat: no-repeat;
  background-size: 100% 400px;
  background-position: center top;
  position: relative;
  border-radius: 18px;
  border: 1px solid #eaeaea;
  margin: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  transition: 0.5s;
  :hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  @media (max-width: 840px) {
    height: 400px;
  }

  @media (max-width: 370px) {
    height: 470px;
  }
`;

export const OptionSVG = styled.svg`
  margin-top: 50px;
`;

// export const BottomText = styled.div`
//   position: absolute;
//   bottom: 0;
// `;

export const CenteredTitle = styled.div`
  text-align: center;
  padding: 30px 10px 10px;
  font-size: 40px;
  font-weight: bold;
  margin-top: 140px;

  background: white;

  @media (max-width: 1240px) {
    font-size: 28px;
  }
`;

export const CenteredSubtitle = styled.div`
  text-align: center;
  padding: 0px 10px 35px;
  font-size: 23px;
  background: white;
  border-radius: 18px;

  @media (max-width: 1240px) {
    font-size: 28px;
  }
`;

export const OptionItem = styled.div`
  width: 50%;
  transition: 0.5s;
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
