import styled from "@emotion/styled";

export const HowItWorksContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;

export const HowItWorksTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;

  color: #e6474b;
`;

export const HowItWorksList = styled.div`
  width: 80%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 25%);
  align-items: center;
  justify-content: center;
  grid-gap: 30px;

  margin-top: 40px;
`;
