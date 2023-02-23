import { ButtonEnter } from "@/src/views/LoginView/styles";
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
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;

  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
`;

export const NavBarLogo = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 43px;
  color: #e6474b;
`;

export const MenuContainer = styled.div`
  width: auto;
`;

export const MenuList = styled.ul`
  width: auto;
  list-style: none;
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.li`
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 23px;
  color: #ffffff;
  cursor: pointer;
  margin-left: 15px;
`;

export const MenuButton = styled(ButtonEnter)`
  background: #e6474b;
  border-radius: 13px;
  width: 120px;
  height: 56px;
  margin: 0;
  margin-left: 20px;
`;
