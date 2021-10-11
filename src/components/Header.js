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
  MenuHamburger,
} from "../styles/Header";
import Menu from "../components/Menu";
import ScrollIntoView from "react-scroll-into-view";

function Header() {
  return (
    <Wrap>
      <div className="header-container">
        <FlexContainer>
          <Link to="/">
            <Logo>
              <Circle />
              <span>Diversify</span>
            </Logo>
          </Link>
          <MenuContainer>
            <MenuItem>
              <ScrollIntoView selector="#benefits" smooth={true}>
                Explore the benefits
              </ScrollIntoView>
            </MenuItem>
            <MenuItem>
              <ScrollIntoView selector="#options" smooth={true}>
                Get connected
              </ScrollIntoView>
            </MenuItem>

            <MenuItemLink
              href="https://avuteq.com"
              target="_blank"
              rel="noreferrer"
            >
              Project by Avuteq
            </MenuItemLink>
          </MenuContainer>

          <MenuHamburger>
            <Menu />
          </MenuHamburger>
        </FlexContainer>
      </div>
    </Wrap>
  );
}

export default Header;
