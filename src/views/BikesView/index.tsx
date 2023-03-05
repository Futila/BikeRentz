import PageLayout from "@/src/components/Layout";
import BikeCard from "@/src/components/molecules/BikeCard";
import BikeFilter, { IFilter } from "@/src/components/molecules/BikeFilter";
import Pagination from "@/src/components/molecules/Pagination";
import { useGetBikes } from "@/src/hooks/useGetBikes";
import { SelectChangeEvent } from "@mui/material";
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
  const [filter, setFilter] = useState<IFilter>({
    search: "",
    price: 0,
    engine: "",
  });
  const [page, setPage] = useState(1);

  const limit = 6;

  const { search, engine, price } = filter;
  const { bikes, loading } = useGetBikes({
    limit,
    search,
    engine,
    price,
    page,
    isFilter: true,
  });

  const handleChange = (
    event: React.ChangeEvent | SelectChangeEvent<string>
  ) => {
    const target = event.target as HTMLInputElement;

    setFilter({
      ...filter,
      [target.name]: target.value,
    });
  };

  const handleSearch = () => {
    console.log(filter);
  };

  return (
    <PageLayout title="Bicicletas">
      <BikesViewContainer>
        <BikesViewTitle>Escolha a bicicleta perfeita para você</BikesViewTitle>
        <BikesViewSubTitle>
          The ideal bike plus concierge level support. Pay per hours.
        </BikesViewSubTitle>

        <FilterContainer>
          <BikeFilter
            filter={filter}
            handleChange={handleChange}
            handleSearch={handleSearch}
          />
        </FilterContainer>

        <BikesList>
          {bikes.map((item) => (
            <BikeCard key={item.id} bike={item} />
          ))}
        </BikesList>

        <PaginationContainer>
          <Pagination
            handleAtivePage={(page: number) => setPage(page)}
            handlePrevPage={() => null}
            handleNextPage={() => null}
            pages={[1, 2, 3]}
            page={page}
          />
        </PaginationContainer>
      </BikesViewContainer>
    </PageLayout>
  );
};

export default BikesPageView;
