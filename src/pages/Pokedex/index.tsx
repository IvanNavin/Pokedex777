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
import Slider from '../../components/Slider';

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
  const [attackMinValue, setAttackMinValue] = useState<number>(0);
  const [attackMaxValue, setAttackMaxValue] = useState<number>(200);
  const debounceValue = useDebounce(inputValue || typeValue || attackMinValue || attackMaxValue, 500);
  const { data, isLoading, isError } = useData<IPokemons>(EEndpoint.getPokemons, query, [debounceValue]);
  const [typesArray, setTypesArray] = useState(new Map());

  const sliderAttackData = {
    min: 0,
    max: 200,
    step: 1,
    value: { min: attackMinValue, max: attackMaxValue },
    label: 'Атака',
  };

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
    if (typesArray.has(type)) {
      typesArray.delete(type);
      setTypesArray(new Map(typesArray));
    } else {
      setTypesArray(new Map(typesArray.set(type, '')));
    }

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

  const attackHandler = (data: any) => {
    let { min, max } = data;

    if (min < 0) min = 0;
    if (max > 200) max = 200;
    setAttackMinValue(min);
    setAttackMaxValue(max);

    setQuery((state: IQuery) => ({
      ...state,
      attack_from: min,
      attack_to: max,
    }));
  };

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
        <div className={s.filters}>
          {!typesIsLoading && dropdownTypes}
          <Slider data={sliderAttackData} onChange={attackHandler} />
        </div>
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
