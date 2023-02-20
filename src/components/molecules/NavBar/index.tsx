import { useGetUserInfo } from "@/src/hooks/useGetUserInfo";
import { useRouter } from "next/router";
import {
  MenuButton,
  MenuContainer,
  MenuItem,
  MenuList,
  NavBarContainer,
  NavBarLogo,
} from "./styles";

interface NavBarProps {
  title: string;
}

const LOGGED_ROUTE = [
  { title: "Bicicletas", route: "bikes" },
  { title: "Bicicletas arrendadas", route: "bikes-rented" },
  { title: "Conta", route: "account" },
];

const NavBar = ({ title }: NavBarProps) => {
  const { isLogged } = useGetUserInfo();
  const router = useRouter();

  const isTransparent =
    title === "Entrar" || title === "Registar" || title === "Home";

  return (
    <NavBarContainer isTransparent={isTransparent}>
      <NavBarLogo>Bike Rentz</NavBarLogo>

      {!isLogged && (
        <MenuContainer>
          <MenuList>
            <MenuItem onClick={() => router.push(`/bikes`)}>
              Bicicletas
            </MenuItem>
            <MenuButton onClick={() => router.push(`/login`)}>
              Entrar
            </MenuButton>
          </MenuList>
        </MenuContainer>
      )}
      {isLogged && (
        <MenuContainer>
          <MenuList>
            {LOGGED_ROUTE.map((item) => (
              <MenuItem
                key={item.title}
                onClick={() => router.push(`/${item.route}`)}
              >
                {item.title}
              </MenuItem>
            ))}
          </MenuList>
        </MenuContainer>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
