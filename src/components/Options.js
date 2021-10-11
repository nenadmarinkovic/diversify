import React from "react";
import {
  Wrap,
  FlexContainer,
  CenteredTitle,
  OptionItem,
  CenteredSubtitle,
  OptionWrapFemale,
  OptionWrapCompanies,
  
} from "../styles/Option";
import Fade from "react-reveal/Fade";
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
              <Fade bottom delay={400} duration={300}>
                <OptionWrapCompanies className="no-ml">
                  <CenteredTitle>Companies</CenteredTitle>
                  <CenteredSubtitle>
                    You are a company looking for female professionals.
                  </CenteredSubtitle>
                </OptionWrapCompanies>
              </Fade>
            </Link>
          </OptionItem>

          <OptionItem>
            <Link to="/professionals">
              <Fade bottom delay={800} duration={300}>
                <OptionWrapFemale className="no-mr">
               
                    <CenteredTitle>Female professionals</CenteredTitle>
                    <CenteredSubtitle>
                      You are a female professional looking for opportunities.
                    </CenteredSubtitle>
                 
                </OptionWrapFemale>
              </Fade>
            </Link>
          </OptionItem>
        </FlexContainer>
      </div>
    </Wrap>
  );
}

export default Option;
