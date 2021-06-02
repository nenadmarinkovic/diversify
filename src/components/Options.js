import React, { useState } from "react";
import {
  Wrap,
  FlexContainer,
  OptionWrap,
  CenteredTitle,
  SVG,
  OptionItem,
  CenteredSubtitle,
  OptionSVG
} from "../styles/Option";
import Fade from "react-reveal/Fade";
import { Link } from "gatsby";
import { Centered, CenteredText, SubText } from "../styles/About";

function Option() {
  const [hovered, setHovered] = useState(false);
  const [hoveredFemale, setHoveredFemale] = useState(false);
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
          <OptionItem
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Link to="/companies">
              <Fade bottom delay={400} duration={300}>
                <OptionWrap className="no-ml">
              

                  <OptionSVG
                    width="60"
                    height="60"
                    viewBox="0 0 512 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M323.653 328.323L270.982 297.914V237.686C270.982 229.402 264.266 222.686 255.982 222.686C247.698 222.686 240.982 229.402 240.982 237.686V298.111L188.653 328.323C181.479 332.465 179.021 341.638 183.163 348.813C185.941 353.626 190.983 356.316 196.167 356.316C198.711 356.316 201.291 355.668 203.653 354.303L256.153 323.993L308.653 354.303C311.015 355.667 313.594 356.316 316.139 356.316C321.323 356.316 326.365 353.625 329.143 348.813C333.286 341.639 330.828 332.465 323.653 328.323Z"
                        fill="#6B80A0"
                      />
                      <path
                        d="M256 80C278.091 80 296 62.0914 296 40C296 17.9086 278.091 0 256 0C233.909 0 216 17.9086 216 40C216 62.0914 233.909 80 256 80Z"
                        fill="#FFC40E"
                      />
                      <path
                        d="M279.802 110H232.198C213.834 110 197.829 122.504 193.386 140.323L184.096 177.581C182.523 183.891 187.296 190 193.799 190H318.2C324.703 190 329.476 183.891 327.903 177.581L318.613 140.323C314.171 122.504 298.166 110 279.802 110Z"
                        fill="#FFC40E"
                      />
                      <path
                        d="M296 40C296 17.909 278.091 0 256 0V80C278.091 80 296 62.091 296 40Z"
                        fill="#FFC40E"
                      />
                      <path
                        d="M327.903 177.581L318.613 140.323C314.171 122.504 298.166 110 279.802 110H256V190H318.201C324.704 190 329.477 183.891 327.903 177.581V177.581Z"
                        fill="#FFC40E"
                      />
                      <path
                        d="M72.205 402C94.2963 402 112.205 384.091 112.205 362C112.205 339.909 94.2963 322 72.205 322C50.1136 322 32.205 339.909 32.205 362C32.205 384.091 50.1136 402 72.205 402Z"
                        fill="#3D4EDE"
                      />
                      <path
                        d="M96.007 432H48.403C30.039 432 14.034 444.504 9.59101 462.323L0.301015 499.581C-1.27199 505.891 3.50102 512 10.004 512H134.405C140.908 512 145.681 505.891 144.108 499.581L134.818 462.323C130.376 444.504 114.371 432 96.007 432Z"
                        fill="#3D4EDE"
                      />
                      <path
                        d="M112.205 362C112.205 339.909 94.296 322 72.205 322V402C94.297 402 112.205 384.091 112.205 362Z"
                        fill="#3D4EDE"
                      />
                      <path
                        d="M144.109 499.581L134.819 462.323C130.376 444.504 114.371 432 96.007 432H72.205V512H134.406C140.909 512 145.682 505.891 144.109 499.581Z"
                        fill="#3D4EDE"
                      />
                      <path
                        d="M439.795 402C461.886 402 479.795 384.091 479.795 362C479.795 339.909 461.886 322 439.795 322C417.704 322 399.795 339.909 399.795 362C399.795 384.091 417.704 402 439.795 402Z"
                        fill="#ED572F"
                      />
                      <path
                        d="M463.597 432H415.993C397.629 432 381.624 444.504 377.181 462.323L367.891 499.581C366.318 505.891 371.091 512 377.594 512H501.995C508.498 512 513.271 505.891 511.698 499.581L502.408 462.323C497.966 444.504 481.961 432 463.597 432V432Z"
                        fill="#ED572F"
                      />
                      <path
                        d="M479.795 362C479.795 339.909 461.886 322 439.795 322V402C461.886 402 479.795 384.091 479.795 362Z"
                        fill="#ED572F"
                      />
                      <path
                        d="M511.698 499.581L502.408 462.323C497.965 444.504 481.961 432 463.597 432H439.795V512H501.996C508.498 512 513.271 505.891 511.698 499.581Z"
                        fill="#ED572F"
                      />
                      <path
                        d="M323.653 328.323L270.982 297.914V237.686C270.982 229.46 264.358 222.787 256.153 222.695V323.993L308.653 354.303C311.015 355.667 313.594 356.316 316.139 356.316C321.323 356.316 326.365 353.625 329.143 348.813C333.286 341.639 330.828 332.465 323.653 328.323Z"
                        fill="#6B80A0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="512" height="512" fill="white" />
                      </clipPath>
                    </defs>
                  </OptionSVG>

                  <CenteredTitle>Companies</CenteredTitle>

                  <CenteredSubtitle>
                    You are a company looking for female professionals.
                  </CenteredSubtitle>
                </OptionWrap>
              </Fade>
            </Link>
          </OptionItem>

          <OptionItem
            onMouseOver={() => setHoveredFemale(true)}
            onMouseLeave={() => setHoveredFemale(false)}
          >
            <Link to="/professionals">
              <Fade bottom delay={800} duration={300}>
                <OptionWrap className="no-mr">
               
                  <OptionSVG
                    width="60"
                    height="60"
                    viewBox="0 0 145 190"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M96.0079 110H48.4039C30.0399 110 14.0349 122.504 9.59188 140.323L0.301869 177.581C-1.27113 183.891 3.50187 190 10.0049 190H134.406C140.909 190 145.682 183.891 144.109 177.581L134.819 140.323C130.377 122.504 114.372 110 96.0079 110V110Z"
                      fill="#ED572F"
                    />
                    <path
                      d="M112.206 40C112.206 17.909 94.2969 0 72.2059 0V80C94.2969 80 112.206 62.091 112.206 40Z"
                      fill="#ED572F"
                    />
                    <path
                      d="M72.2059 80C94.2973 80 112.206 62.0914 112.206 40C112.206 17.9086 94.2973 0 72.2059 0C50.1145 0 32.2059 17.9086 32.2059 40C32.2059 62.0914 50.1145 80 72.2059 80Z"
                      fill="#ED572F"
                    />
                    <path
                      d="M144.109 177.581L134.819 140.323C130.376 122.504 114.372 110 96.0079 110H72.2059V190H134.407C140.909 190 145.682 183.891 144.109 177.581Z"
                      fill="#ED572F"
                    />
                  </OptionSVG>
                  <CenteredTitle>Female Professionals</CenteredTitle>
                  <CenteredSubtitle>
                    You are a female professional looking for more
                    opportunities.
                  </CenteredSubtitle>
                </OptionWrap>
              </Fade>
            </Link>
          </OptionItem>
        </FlexContainer>
      </div>
    </Wrap>
  );
}

export default Option;
