import styled from "styled-components";

export const Wrap = styled.div`
  height: 80px;
  position: fixed;
  width: 100%;
  margin-top: -10px;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 30;
  border-bottom: 1px solid #eaeaea;
`;

export const FlexContainer = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #363636;

`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const Circle = styled.div`
  height: 20px;
  width: 20px;
  background-color: #ed572f;
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;


  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuHamburger = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.div`
  margin-left: 30px;
  font-size: 16px;
  font-weight: bold;
  transition: 0.3s;

  :hover {
    color: #ed572f;
    cursor: pointer;
  }
`;

export const MenuItemLink = styled.a`
  margin-left: 30px;
  font-size: 16px;
  font-weight: bold;
  transition: 0.3s;

  :hover {
    color: #ed572f;
    cursor: pointer;
  }
`;
