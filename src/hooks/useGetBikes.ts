import { useEffect, useState } from "react";
import { getBikes } from "../services/bikes";
import { Bike } from "../typescript/bikes";

interface useGetBikesProps {
  limit: number;
  page?: number;
}

export const useGetBikes = ({ limit }: useGetBikesProps) => {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [loading, setLoading] = useState(false);

  const handlegGetBikes = async () => {
    setLoading(true);
    const result = await getBikes({ limit });
    setBikes(result);

    setLoading(false);
  };
  useEffect(() => {
    handlegGetBikes();
  }, []);

  return { bikes, loading };
};
