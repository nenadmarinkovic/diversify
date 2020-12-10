import styled from "styled-components";

export const FlexContainer = styled.main`
  display: flex;
  justify-content: space-between;
  margin-bottom: -120px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormText = styled.div`
  padding: 110px 0 20px;
  font-size: 32px;
  text-align: center;
  line-height: 1.5;
`;

export const FlexListText = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
`;

export const FlexList = styled.ul`
  padding: 0;
  display: flex;
  font-size: 18px;
`;

export const FlexDiv = styled.div`
  display: flex;
  margin-top: 5px;
  width: 100%;
`;

export const FlexItem = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const MainForm = styled.main`
  margin-top: 30px;
  width: 48%;
  font-size: 21px;
  line-height: 1.65;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FormContainer = styled.form`
  display: grid;
  grid-row-gap: .9em;
`;
export const FormLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  text-transform: uppercase;
  width: 55%;
  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }
`;

export const FormInput = styled.input`
  margin: 0;
  padding: 0.5em;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
  width: 70%;
  font-size: 1rem;
  font-family: inherit;
  border: none;
  border-bottom: 2px solid black;

  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }
`;

export const TextArea = styled.textarea`
  margin: 0;
  border-radius: 5px;
  padding: 0.5em;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.2s ease;
  height: 180px;
  border: 2px solid black;
  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 0.65em 1em;
  border-radius: 18px;
  cursor: pointer;
  line-height: 1;
  transition: all 0.2s ease;
  background: #ed572f;
  color: white;
  border: 2px solid #ed572f;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.2);

  :hover {
    cursor: pointer;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }
`;

export const Error = styled.div`
  background: #ee0000;
  color: #fff;
  margin-top: 16px;
  text-align: center;
`;

export const Message = styled.p`
  font-size: 16px;
`;

export const Copyright = styled.span`
  margin-top: 75px;
  display: block;
  text-align: center;
  padding: 20px 0;
`;

export const SVG = styled.svg`
  margin-top: -100px;
  transform: scaleX(-1);
`;
