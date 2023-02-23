import { getBikes } from "@/src/services/bikes";
import { Bike } from "@/src/typescript/bikes";
import { useEffect, useState } from "react";
import BikeCard from "../BikeCard";
import { NewBikesContainer, NewBikesList, NewBikesTitle } from "./styles";

const NewBikes = () => {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [loading, setLoading] = useState(false);
  const limit = 4;

  const handlegGetBikes = async () => {
    setLoading(true);
    const result = await getBikes({ limit });
    setBikes(result);

    setLoading(false);
  };
  useEffect(() => {
    handlegGetBikes();
  }, []);

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
