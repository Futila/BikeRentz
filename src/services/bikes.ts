import { Bike } from "../typescript/bikes";
import { api } from "./api";

interface GetBikesResponse {
  bikes: Bike[];
  totalItems: number;
}

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
}: getBikesProps): Promise<GetBikesResponse> => {
  const params = new URLSearchParams({
    engine_like: engine as any,
    _page: `${page}`,
    _limit: limit + "",
    name_like: search,
  }).toString();

  const response = await api.get(
    "/bikes?" + params + `${price ? `&price=${price}` : ""}`
  );

  const totalItems = Number(response.headers["x-total-count"]) || 0;

  return { bikes: response.data as Bike[], totalItems };
};
