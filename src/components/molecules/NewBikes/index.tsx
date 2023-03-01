import { useGetBikes } from "@/src/hooks/useGetBikes";

import BikeCard from "../BikeCard";
import { NewBikesContainer, NewBikesList, NewBikesTitle } from "./styles";

const NewBikes = () => {
  const limit = 4;
  const { bikes, loading } = useGetBikes({ limit });

  return (
    <NewBikesContainer>
      <NewBikesTitle>BICICLETAS NOVAS</NewBikesTitle>

      {loading && <h1>CARREGANDO BICICLETAS...</h1>}
      {!loading && bikes.length === 0 && <h1>SEM BICICLETAS NOVAS</h1>}

      {!!bikes.length && (
        <NewBikesList>
          {bikes.map((item) => (
            <BikeCard bike={item} key={item.id} />
          ))}
        </NewBikesList>
      )}
    </NewBikesContainer>
  );
};

export default NewBikes;
