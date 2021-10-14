import React from "react";
import {
  Wrap,
  FlexContainer,
  CenteredTitle,
  OptionItem,
  CenteredSubtitle,
  OptionWrapFemale,
  OptionWrapCompanies,
  TextBlock,
  Hover,
} from "../styles/Option";
import { Link } from "gatsby";
import { Centered, CenteredText, SubText } from "../styles/About";

function Option() {
  return (
    <Wrap>
      <div className="container">
        <CenteredText>
          By creating opportunities for female professionals, our project aims
          at promoting diversity and inclusion across the industry.
        </CenteredText>
        <SubText>- AVUTEQ TEAM -</SubText>
        <Centered id="options">Choose your option:</Centered>
        <FlexContainer>
          <OptionItem>
            <Link to="/companies">
              <Hover>
                <OptionWrapCompanies className="no-ml"></OptionWrapCompanies>
                <TextBlock>
                  <CenteredTitle>Companies</CenteredTitle>
                  <CenteredSubtitle>
                    You are a company looking for female professionals.
                  </CenteredSubtitle>
                </TextBlock>
              </Hover>
            </Link>
          </OptionItem>

          <OptionItem>
            <Link to="/professionals">
              <Hover>
                <OptionWrapFemale className="no-mr"></OptionWrapFemale>
                <TextBlock>
                  <CenteredTitle>Female professionals</CenteredTitle>
                  <CenteredSubtitle>
                    You are a female professional looking for opportunities.
                  </CenteredSubtitle>
                </TextBlock>
              </Hover>
            </Link>
          </OptionItem>
        </FlexContainer>
      </div>
    </Wrap>
  );
}

export default Option;
