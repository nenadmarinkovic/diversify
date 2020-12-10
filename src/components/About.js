import React from "react";

import {
  Wrap,
  SVGTop,
  SVGBottom,
  AboutContainer,
  CenteredText,
  SubText,
  FlexContainer,
  Startup,
  Female,
  Title,
  Paragraph,
  Centered,
  BigTitle,
} from "../styles/About";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <>
      <SVGTop xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#E8E9E8"
          fill-opacity="1"
          d="M0,224L80,234.7C160,245,320,267,480,272C640,277,800,267,960,245.3C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </SVGTop>
      <Wrap>
        <div className="container">
          <AboutContainer>
            <CenteredText>
              We focus on enabling company advisory to board-level part-time
              executive engagements.
            </CenteredText>
            <SubText>- AVUTEQ TEAM -</SubText>
            <Centered id="benefits">Explore the benefits:</Centered>
            <FlexContainer>
              <Startup>
                <Fade bottom delay={400} duration={400}>
                  <BigTitle>Companies</BigTitle>
                  <Title>
                    <svg
                      height="25"
                      viewBox="0 0 512 512"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m369.164062 174.769531c7.8125 7.8125 7.8125 20.476563 0 28.285157l-134.171874 134.175781c-7.8125 7.808593-20.472657 7.808593-28.285157 0l-63.871093-63.875c-7.8125-7.808594-7.8125-20.472657 0-28.28125 7.808593-7.8125 20.472656-7.8125 28.28125 0l49.730468 49.730469 120.03125-120.035157c7.8125-7.808593 20.476563-7.808593 28.285156 0zm142.835938 81.230469c0 141.503906-114.515625 256-256 256-141.503906 0-256-114.515625-256-256 0-141.503906 114.515625-256 256-256 141.503906 0 256 114.515625 256 256zm-40 0c0-119.394531-96.621094-216-216-216-119.394531 0-216 96.621094-216 216 0 119.394531 96.621094 216 216 216 119.394531 0 216-96.621094 216-216zm0 0" />
                    </svg>
                    <span style={{ marginLeft: "10px" }}>
                      Short or long-term professional advising
                    </span>
                  </Title>
                  <Paragraph>
                    This obviously gives you many advantages, from strengthening
                    your current position to leading your product into
                    completely new directions.
                  </Paragraph>
                  <Title>
                    <svg
                      height="25"
                      viewBox="0 0 512 512"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m369.164062 174.769531c7.8125 7.8125 7.8125 20.476563 0 28.285157l-134.171874 134.175781c-7.8125 7.808593-20.472657 7.808593-28.285157 0l-63.871093-63.875c-7.8125-7.808594-7.8125-20.472657 0-28.28125 7.808593-7.8125 20.472656-7.8125 28.28125 0l49.730468 49.730469 120.03125-120.035157c7.8125-7.808593 20.476563-7.808593 28.285156 0zm142.835938 81.230469c0 141.503906-114.515625 256-256 256-141.503906 0-256-114.515625-256-256 0-141.503906 114.515625-256 256-256 141.503906 0 256 114.515625 256 256zm-40 0c0-119.394531-96.621094-216-216-216-119.394531 0-216 96.621094-216 216 0 119.394531 96.621094 216 216 216 119.394531 0 216-96.621094 216-216zm0 0" />
                    </svg>
                    <span style={{ marginLeft: "10px" }}>
                      New learning opportunities
                    </span>
                  </Title>
                  <Paragraph>
                    Having an experienced professional on your team brings not
                    only new perspectives on your company but important insights
                    into the industry as well.
                  </Paragraph>
                  <Title>
                    <svg
                      height="25"
                      viewBox="0 0 512 512"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m369.164062 174.769531c7.8125 7.8125 7.8125 20.476563 0 28.285157l-134.171874 134.175781c-7.8125 7.808593-20.472657 7.808593-28.285157 0l-63.871093-63.875c-7.8125-7.808594-7.8125-20.472657 0-28.28125 7.808593-7.8125 20.472656-7.8125 28.28125 0l49.730468 49.730469 120.03125-120.035157c7.8125-7.808593 20.476563-7.808593 28.285156 0zm142.835938 81.230469c0 141.503906-114.515625 256-256 256-141.503906 0-256-114.515625-256-256 0-141.503906 114.515625-256 256-256 141.503906 0 256 114.515625 256 256zm-40 0c0-119.394531-96.621094-216-216-216-119.394531 0-216 96.621094-216 216 0 119.394531 96.621094 216 216 216 119.394531 0 216-96.621094 216-216zm0 0" />
                    </svg>
                    <span style={{ marginLeft: "10px" }}>
                      Making steps towards diversity
                    </span>
                  </Title>
                  <Paragraph>
                    By affirming female professionals not only a new skill set
                    is introduced to your company but also a whole new spectrum
                    of innovations.
                  </Paragraph>
                </Fade>
              </Startup>

              <Female>
                <Fade bottom delay={800} duration={400}>
                  <BigTitle className="small-resolution-margin">
                    Female Professionals
                  </BigTitle>

                  <Title>
                    <svg
                      height="25"
                      viewBox="0 0 512 512"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m369.164062 174.769531c7.8125 7.8125 7.8125 20.476563 0 28.285157l-134.171874 134.175781c-7.8125 7.808593-20.472657 7.808593-28.285157 0l-63.871093-63.875c-7.8125-7.808594-7.8125-20.472657 0-28.28125 7.808593-7.8125 20.472656-7.8125 28.28125 0l49.730468 49.730469 120.03125-120.035157c7.8125-7.808593 20.476563-7.808593 28.285156 0zm142.835938 81.230469c0 141.503906-114.515625 256-256 256-141.503906 0-256-114.515625-256-256 0-141.503906 114.515625-256 256-256 141.503906 0 256 114.515625 256 256zm-40 0c0-119.394531-96.621094-216-216-216-119.394531 0-216 96.621094-216 216 0 119.394531 96.621094 216 216 216 119.394531 0 216-96.621094 216-216zm0 0" />
                    </svg>
                    <span style={{ marginLeft: "10px" }}>
                      New experiences within the industry
                    </span>
                  </Title>
                  <Paragraph>
                    Advancing your career when you’re in a high position is not
                    always easy, that’s why we want to offer the chance to
                    choose exactly the experiences you need and want.
                  </Paragraph>
                  <Title>
                    <svg
                      height="25"
                      viewBox="0 0 512 512"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m369.164062 174.769531c7.8125 7.8125 7.8125 20.476563 0 28.285157l-134.171874 134.175781c-7.8125 7.808593-20.472657 7.808593-28.285157 0l-63.871093-63.875c-7.8125-7.808594-7.8125-20.472657 0-28.28125 7.808593-7.8125 20.472656-7.8125 28.28125 0l49.730468 49.730469 120.03125-120.035157c7.8125-7.808593 20.476563-7.808593 28.285156 0zm142.835938 81.230469c0 141.503906-114.515625 256-256 256-141.503906 0-256-114.515625-256-256 0-141.503906 114.515625-256 256-256 141.503906 0 256 114.515625 256 256zm-40 0c0-119.394531-96.621094-216-216-216-119.394531 0-216 96.621094-216 216 0 119.394531 96.621094 216 216 216 119.394531 0 216-96.621094 216-216zm0 0" />
                    </svg>
                    <span style={{ marginLeft: "10px" }}>
                      Meaningful engagement
                    </span>
                  </Title>
                  <Paragraph>
                    Our aim is to give you the opportunity to choose projects
                    you actually find interesting and meaningful, leading to
                    fulfilling cooperation.
                  </Paragraph>
                  <Title>
                    <svg
                      height="25"
                      viewBox="0 0 512 512"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m369.164062 174.769531c7.8125 7.8125 7.8125 20.476563 0 28.285157l-134.171874 134.175781c-7.8125 7.808593-20.472657 7.808593-28.285157 0l-63.871093-63.875c-7.8125-7.808594-7.8125-20.472657 0-28.28125 7.808593-7.8125 20.472656-7.8125 28.28125 0l49.730468 49.730469 120.03125-120.035157c7.8125-7.808593 20.476563-7.808593 28.285156 0zm142.835938 81.230469c0 141.503906-114.515625 256-256 256-141.503906 0-256-114.515625-256-256 0-141.503906 114.515625-256 256-256 141.503906 0 256 114.515625 256 256zm-40 0c0-119.394531-96.621094-216-216-216-119.394531 0-216 96.621094-216 216 0 119.394531 96.621094 216 216 216 119.394531 0 216-96.621094 216-216zm0 0" />
                    </svg>
                    <span style={{ marginLeft: "10px" }}>
                      Diversifying your professional network
                    </span>
                  </Title>
                  <Paragraph>
                    For your present and future it is valuable to have a wider
                    professional network, with a range of possibilities at your
                    disposal.
                  </Paragraph>
                </Fade>
              </Female>
            </FlexContainer>
          </AboutContainer>
        </div>
      </Wrap>
      <SVGBottom xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#E8E9E8"
          fill-opacity="1"
          d="M0,224L120,213.3C240,203,480,181,720,181.3C960,181,1200,203,1320,213.3L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </SVGBottom>
    </>
  );
}

export default About;
