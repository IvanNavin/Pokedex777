import React, { useEffect, useState } from 'react';
import Pokemon, { IPokemonsProps } from '../../components/PokemonCard';
import Heading from '../../components/Heading';

import s from './Pokedex.module.scss';

interface IData {
  total: number;
  pokemons: Array<IPokemonsProps>;
}

const usePokemons = () => {
  const [data, setData] = useState<IData>({ total: 0, pokemons: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
        const result = await response.json();

        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const Pokedex = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Партак!</div>;
  }

  return (
    <div>
      <Heading tag="h3" className={s.title}>
        {data.total} <b>Покемонов</b> все для тебя
      </Heading>
      <div className={s.wrapper}>
        {data.pokemons.map((pokemon) => {
          return <Pokemon {...pokemon} key={pokemon.id} />;
        })}
      </div>
    </div>
  );
};

export default Pokedex;
