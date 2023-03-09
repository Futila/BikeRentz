import { useEffect, useState } from "react";
import { getBikes } from "../services/bikes";
import { Bike } from "../typescript/bikes";

interface useGetBikesProps {
  limit: number;
  page?: number;
  search?: string;
  price?: number;
  engine?: string;
  isFilter: boolean;
}

interface GetBikes {
  bikes: Bike[];
  loading: boolean;
  totalItems: number;
}

export const useGetBikes = ({
  limit,
  engine,
  page,
  price,
  search,
  isFilter,
}: useGetBikesProps): GetBikes => {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  const handlegGetBikes = async () => {
    setLoading(true);
    let result: Bike[] = [];
    let total = 0;

    if (isFilter) {
      const response = await getBikes({ limit, search, engine, page, price });
      result = response.bikes;
      total = response.totalItems;
    } else {
      const response = await getBikes({ limit, search, engine, page, price });
      result = response.bikes;
      total = response.totalItems;
    }

    setTotalItems(total);
    setBikes(result);
    setLoading(false);
  };

  useEffect(() => {
    handlegGetBikes();
  }, [search, engine, price]);

  return { bikes, loading, totalItems };
};
