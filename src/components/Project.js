import React from "react";
import { Centered, CenteredText } from "../styles/About";
import { Wrap, Text, SmallerText, LinkTo } from "../styles/Project";
import logo from "../assets/logo.jpg"

function Project() {
  return (
    <Wrap>
      <Centered>Project by:</Centered>
      <Text>
        <CenteredText>
          <LinkTo href="https://avuteq.com" target="_blank" rel="noreferrer">
            <img className="logo-image" src={logo} alt="Company Logo"/>
          </LinkTo>
        </CenteredText>
        <SmallerText>
          Senior and Leadership level talent acquisition for the world's leading
          technology platforms.
        </SmallerText>
      </Text>
    </Wrap>
  );
}

export default Project;
