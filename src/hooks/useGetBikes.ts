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

  const handlegGetBikes = async () => {
    setLoading(true);
    let result: Bike[] = [];

    if (isFilter) {
      result = await getBikes({ limit, search, engine, page, price });
      setBikes(result);
    } else {
      result = await getBikes({ limit });
      setBikes(result);
    }

    setLoading(false);
  };

  useEffect(() => {
    handlegGetBikes();
  }, [search, engine, price]);

  return { bikes, loading };
};
