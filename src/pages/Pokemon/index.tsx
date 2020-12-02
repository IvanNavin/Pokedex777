import React from 'react';
import useData from '../../hook/useData';
import { PokemonsRequest } from '../../interface/pokemons';
import s from '../Pokedex/Pokedex.module.scss';
import { ReactComponent as Loading } from '../Pokedex/assets/Loading.svg';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<PokemonsRequest>('getPokemon', { id });

  if (isLoading) {
    return <Loading className={s.loader} />;
  }

  return <>Покемон {data?.name}</>;
};

export default Pokemon;
