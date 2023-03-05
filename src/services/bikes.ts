import { Bike } from "../typescript/bikes";
import { api } from "./api";

interface getBikesProps {
  limit: number;
  page?: number;
  search?: string;
  price?: number;
  engine?: string;
}

export const getBikes = async ({
  limit,
  engine = "",
  page = 1,
  price,
  search = "",
}: getBikesProps): Promise<Bike[]> => {
  const params = new URLSearchParams({
    name_like: search,
    engine_like: engine as any,
    _limit: limit + "",
    _page: `${page}`,
  }).toString();

  const response = await api.get(
    "/bikes?" + params + `${price ? `&price=${price}` : ""}`
  );

  return response.data;
};
