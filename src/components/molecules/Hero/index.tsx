import {
  BikeHeroBackground,
  BikeHeroBackgroundOverlay,
  HeroButton,
  HeroContainer,
  HeroText,
  HeroTextInfoContainer,
  HeroTitle,
} from "./styles";

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroTextInfoContainer>
        <HeroTitle>ARRENDA UMA BICICLETA HOJE E GIRE A CIDADE</HeroTitle>
        <HeroText>
          The ideal bike plus concierge level support. Pay per hours.
        </HeroText>
        <HeroButton>COMEÇAR AGORA</HeroButton>
      </HeroTextInfoContainer>
      <BikeHeroBackground>
        <BikeHeroBackgroundOverlay />
      </BikeHeroBackground>
    </HeroContainer>
  );
};
