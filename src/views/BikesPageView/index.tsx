import PageLayout from "@/src/components/Layout";
import BikeCard from "@/src/components/molecules/BikeCard";
import { useGetBikes } from "@/src/hooks/useGetBikes";
import { useState } from "react";

import {
  BikesList,
  BikesViewContainer,
  BikesViewSubTitle,
  BikesViewTitle,
  FilterContainer,
  PaginationContainer,
} from "./styles";

const BikesPageView = () => {
  const [page, setPage] = useState(1);

  const limit = 6;

  const { bikes, loading } = useGetBikes({ limit });

  return (
    <PageLayout title="Bicicletas">
      <BikesViewContainer>
        <BikesViewTitle>Escolha a bicicleta perfeita para você</BikesViewTitle>
        <BikesViewSubTitle>
          The ideal bike plus concierge level support. Pay per hours.
        </BikesViewSubTitle>

        <FilterContainer></FilterContainer>

        <BikesList>
          {bikes.map((item) => (
            <BikeCard key={item.id} bike={item} />
          ))}
        </BikesList>

        <PaginationContainer>Paginação</PaginationContainer>
      </BikesViewContainer>
    </PageLayout>
  );
};

export default BikesPageView;
