import { useEffect, useState } from 'react';
import { IPokemonsProps } from '../components/PokemonCard';
import req from '../utils/request';

interface IData {
  total: number;
  pokemons: Array<IPokemonsProps>;
}

const useData = (endpoint: string, query: object, deps: any[] = []) => {
  const [data, setData] = useState<IData>({ total: 0, pokemons: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const result = await req(endpoint, query);

        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
