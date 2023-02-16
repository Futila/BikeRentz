import { NavBarContainer, NavBarLogo } from "./styles";

interface NavBarProps {
  title: string;
}

const NavBar = ({ title }: NavBarProps) => {
  return (
    <NavBarContainer isTransparent={title === "Entrar"}>
      <NavBarLogo>Bike Rentz</NavBarLogo>
    </NavBarContainer>
  );
};

export default NavBar;
