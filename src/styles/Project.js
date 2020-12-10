import styled from "styled-components";

export const Wrap = styled.div`
  margin-bottom: -100px;
  padding-top: 10px;
`;

export const Text = styled.div`
  padding: 0 280px;
  @media (max-width: 1240px) {
    padding: 30px 80px;
  }
  @media (max-width: 840px) {
    padding: 10px 10px 80px 10px;
  }
`;

export const SmallerText = styled.div`
  font-size: 23px;
  text-align: center;
  margin-left: 80px;
  margin-top: 10px;
  line-height: 1.6;
  margin-right: 80px;

  @media (max-width: 840px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const LinkTo = styled.a`
  color: black;
  text-decoraation: none;
`;
