import styled from "@emotion/styled";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  padding-left: 100px;
  padding-right: 100px;
`;

export const BikeHeroBackground = styled.div`
  width: 700px;
  height: 700px;
  background: red;

  position: absolute;
  top: -25px;
  right: -25px;

  border-radius: 57px;

  background: url(https://images.unsplash.com/photo-1627936677298-1bee8ad55e67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpY2ljbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60);
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export const BikeHeroBackgroundOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const HeroTextInfoContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const HeroTitle = styled.h1`
  font-family: "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 58px;
  line-height: 71px;

  color: #e6474b;
  margin-bottom: 30px;
`;

export const HeroText = styled.p`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 37px;
  line-height: 45px;
  color: #0a0909;
  margin-bottom: 30px;
`;

export const HeroButton = styled.button`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 23px;
  text-transform: uppercase;
  margin-bottom: 30px;
  color: #ffffff;

  width: 267px;
  height: 67px;
  left: 110px;
  top: 624px;

  background: #e6474b;
  border-radius: 18px;
  border: none;
  outline: none;
  cursor: pointer;
`;
