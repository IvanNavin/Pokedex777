import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pokemon from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import useData from '../../hook/useData';

import { ReactComponent as Loading } from './assets/Loading.svg';

import s from './Pokedex.module.scss';
import DropdownMenu from '../../components/DropdownMenu';
import { IPokemons, PokemonsRequest } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';
import { getPokemonsTypes, getPokemonsTypesIsLoading, getTypesAction } from '../../store/pokemon';
import { EEndpoint } from '../../config/index';

interface IQuery {
  limit: number;
  name?: string;
}

const Pokedex = () => {
  const dispatch = useDispatch();
  const typeFilter = useSelector(getPokemonsTypes);
  const typesIsLoading = useSelector(getPokemonsTypesIsLoading);
  const [inputValue, setInputValue] = useState<string>('');
  const [typeValue, setTypeValue] = useState<string>('');
  const [stateDropdownMenu, setStateDropdownMenu] = useState<boolean>(false);
  const [query, setQuery] = useState<IQuery>({ limit: 100 });
  const debounceValue = useDebounce(inputValue || typeValue, 500);
  const { data, isLoading, isError } = useData<IPokemons>(EEndpoint.getPokemons, query, [debounceValue]);
  const [typesArray, setTypesArray] = useState(new Map());

  useEffect(() => {
    dispatch(getTypesAction());
  }, []);

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(ev.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: ev.target.value,
    }));
  };

  const toggleHandler = (type: string, state: boolean) => {
    typesArray.has(type) ? typesArray.delete(type) : setTypesArray(new Map(typesArray.set(type, '')));
    setTypeValue(type);
    setStateDropdownMenu(state);

    const types = Array.from(typesArray.keys()).join('|');

    setQuery((state: IQuery) => ({
      ...state,
      types,
    }));
  };

  const dropdownTypes = useMemo(() => {
    return (
      <DropdownMenu
        title="Тип"
        types={typeFilter}
        onToggle={toggleHandler}
        isActiveMenu={stateDropdownMenu}
        activeTypes={typesArray}
      />
    );
  }, [stateDropdownMenu, toggleHandler, typesArray, typeFilter]);

  if (isError) {
    return <div>Партак!</div>;
  }

  return (
    <div className={s.root}>
      <div>
        <Heading tag="h3" className={s.title}>
          {!isLoading && data && data.total} <b>Покемонов</b> уже ждут тебя
        </Heading>
        <Input inputValue={inputValue} onChange={onChange} />
        <div className={s.filters}>{!typesIsLoading && dropdownTypes}</div>
      </div>
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
