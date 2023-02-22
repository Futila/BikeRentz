import BikeCard from "../BikeCard";
import { NewBikesContainer, NewBikesList, NewBikesTitle } from "./styles";

const NewBikes = () => (
  <NewBikesContainer>
    <NewBikesTitle>BICICLETAS NOVAS</NewBikesTitle>
    <NewBikesList>
      {[1, 2, 3, 4].map((item) => (
        <BikeCard key={item} />
      ))}
    </NewBikesList>
  </NewBikesContainer>
);

export default NewBikes;
