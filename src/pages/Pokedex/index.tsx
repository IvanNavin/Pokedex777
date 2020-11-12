import React, { useEffect, useState } from 'react';
import Pokemon, { IPokemonsProps } from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import Input from '../../components/Input';

import { ReactComponent as Loading } from './assets/Loading.svg';

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
      const limit = `?limit=9`;
      const url = `http://zar.hosthot.ru/api/v1/pokemons${limit}`;
      try {
        const response = await fetch(url);
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
    return <Loading className={s.loader} />;
  }

  if (isError) {
    return <div>Партак!</div>;
  }

  return (
    <div>
      <Heading tag="h3" className={s.title}>
        {data.total} <b>Покемонов</b> уже ждут тебя
      </Heading>
      <Input type="text" />
      <div className={s.wrapper}>
        {data.pokemons.map((pokemon) => {
          return <Pokemon {...pokemon} key={pokemon.id} />;
        })}
      </div>
    </div>
  );
};

export default Pokedex;
