import styled from "@emotion/styled";

interface NavBarContainerProps {
  isTransparent: boolean;
}

export const NavBarContainer = styled.div<NavBarContainerProps>`
  width: 100%;
  height: 100px;
  background: ${({ isTransparent }) =>
    isTransparent ? "transparent" : "#315A74"};

  display: flex;
  align-items: center;
  flex-direction: row;
  padding-left: 100px;
  padding-right: 100px;
`;

export const NavBarLogo = styled.h1`
  font-family: "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 43px;

  color: #e6474b;
`;
