import React from "react";
import { Link } from "gatsby";
import {
  Wrap,
  FlexContainer,
  Logo,
  Circle,
  MenuContainer,
  MenuItem,
  MenuItemLink,
} from "../styles/Header";

function Header() {
  return (
    <Wrap>
      <div className="container">
        <FlexContainer>
          <Link to="/">
            <Logo>
              <Circle />
              <span>Diversify</span>
            </Logo>
          </Link>
          <MenuContainer>
            <MenuItemLink
              href="https://avuteq.com"
              target="_blank"
              rel="noreferrer"
            >
              Project by Avuteq
            </MenuItemLink>
          </MenuContainer>
        </FlexContainer>
      </div>
    </Wrap>
  );
}

export default Header;
