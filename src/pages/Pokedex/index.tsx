import React, { useState } from 'react';
import Pokemon from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import useData from '../../hook/useData';

import { ReactComponent as Loading } from './assets/Loading.svg';

import s from './Pokedex.module.scss';
import DropdownMenu from '../../components/DropdownMenu';
import { IPokemons, PokemonsRequest } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';

interface IQuery {
  limit: number;
  name?: string;
}

const Pokedex = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [query, setQuery] = useState<IQuery>({
    limit: 9,
  });

  const debounceValue = useDebounce(inputValue, 500);

  const typeFilter = ['grass', 'poison', 'fire', 'flying', 'water', 'bug'];
  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debounceValue]);

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(ev.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: ev.target.value,
    }));
  };

  if (isError) {
    return <div>Партак!</div>;
  }

  return (
    <div className={s.root}>
      <Heading tag="h3" className={s.title}>
        {!isLoading && data && data.total} <b>Покемонов</b> уже ждут тебя
      </Heading>
      <Input inputValue={inputValue} onChange={onChange} />
      <div className={s.filters}>{!isLoading && <DropdownMenu title="Тип" types={typeFilter} />}</div>
      <div className={s.wrapper}>
        {isLoading ? (
          <Loading className={s.loader} />
        ) : (
          data && data.pokemons.map((pokemon: PokemonsRequest) => <Pokemon {...pokemon} key={pokemon.id} />)
        )}
      </div>
    </div>
  );
};

export default Pokedex;
