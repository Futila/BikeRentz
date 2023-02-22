import {
  BikeCardTitle,
  BikeCardContainer,
  BikeCardCover,
  BikeCardDescription,
  BikeCardButton,
  BikeCardDescriptionItem,
  BikeCardEngineName,
  BikeCardImagesContainer,
  BikeCardImagesCoursel,
  BikeCardImagesCourselItem,
  BikeCardPrice,
} from "./styles";

import { AiOutlineArrowRight } from "react-icons/ai";

const BikeCard = () => (
  <BikeCardContainer>
    <BikeCardTitle>Binazinha</BikeCardTitle>
    <BikeCardEngineName>Bicicleta</BikeCardEngineName>
    <BikeCardPrice>$10/hora</BikeCardPrice>
    <BikeCardImagesContainer>
      <BikeCardCover src="" alt="" />

      <BikeCardImagesCoursel>
        {[1, 2, 3].map((item) => (
          <BikeCardImagesCourselItem key={item} src="" alt="" />
        ))}
      </BikeCardImagesCoursel>
    </BikeCardImagesContainer>

    <BikeCardDescription>
      {[1, 2, 3, 4].map((item) => (
        <BikeCardDescriptionItem key={item}>
          <div className="dot" />
          <p className="text">Alguma coisa sobre a bike</p>
        </BikeCardDescriptionItem>
      ))}
    </BikeCardDescription>
    <BikeCardButton>
      <AiOutlineArrowRight fontSize={35} color="#E6474B" />
    </BikeCardButton>
  </BikeCardContainer>
);

export default BikeCard;
