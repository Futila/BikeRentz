import {
  BikeFilterButton,
  BikeFilterContainer,
  FieldContainer,
} from "./styles";

import { BiSearchAlt2 } from "react-icons/bi";
import { GiPriceTag, GiDutchBike } from "react-icons/gi";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React from "react";

const BIKE_ENGINE = ["todos", "electrica", "mecanica"];

export interface IFilter {
  search: string;
  price: number;
  engine: string;
}

interface BikeFilterProps {
  filter: IFilter;
  handleSearch: () => void;
  handleChange: (event: React.ChangeEvent | SelectChangeEvent<string>) => void;
}

const BikeFilter = ({
  filter,
  handleChange,
  handleSearch,
}: BikeFilterProps) => {
  return (
    <BikeFilterContainer>
      <FieldContainer>
        <div className="field-icon">
          <BiSearchAlt2 />
        </div>
        <TextField
          name="search"
          placeholder="pesquise por nome"
          type="search"
          value={filter.search}
          onChange={handleChange}
        />
      </FieldContainer>
      <FieldContainer>
        <div className="field-icon">
          <GiPriceTag />
        </div>
        <TextField
          name="price"
          placeholder="pesquise por preço"
          type="number"
          value={filter.price}
          onChange={handleChange}
        />
      </FieldContainer>
      <FieldContainer>
        <div className="field-icon">
          <GiDutchBike />
        </div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Motor</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter.engine}
            label=""
            name="engine"
            onChange={handleChange}
          >
            {BIKE_ENGINE.map((item) => (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FieldContainer>
      <BikeFilterButton onClick={handleSearch}>pesquisar</BikeFilterButton>
    </BikeFilterContainer>
  );
};

export default BikeFilter;
