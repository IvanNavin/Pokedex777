import React from 'react';
import cn from 'classnames';
import Heading from '../Heading';
import useModal from '../Modal/useModal';
import Modal from '../Modal';

import soon from './assets/soon.png';

import s from './Pokemon.module.scss';

type TPokemonAbility =
  | 'overgrow'
  | 'chlorophyll'
  | 'blaze'
  | 'solar-power'
  | 'torrent'
  | 'rain-dish'
  | 'shield-dust'
  | 'run-away';

type TPokemonType = 'grass' | 'poison' | 'fire' | 'flying' | 'water' | 'bug';

interface IPokemonStats {
  attack: number;
  defense: number;
  hp?: number;
  'special-attack': number;
  'special-defense': number;
  speed?: number;
}

export interface IPokemonsProps {
  abilities?: TPokemonAbility[];
  base_experience?: number;
  height?: number;
  id?: number;
  img: string;
  is_default?: boolean;
  name: string;
  name_clean?: string;
  order?: number;
  stats: IPokemonStats;
  types: TPokemonType[];
  weight?: number;
}

const Pokemon = (pokemon: IPokemonsProps) => {
  const {
    types,
    name,
    img,
    stats: { attack, defense },
  } = pokemon;
  const { isShowing, toggle } = useModal();
  const pictureWrap = cn(s.pictureWrap, s[types[0]]);

  return (
    <div className={s.root} onClick={toggle} role="dialog">
      <div className={s.infoWrap}>
        <Heading tag="h5" className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Атака
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Защита
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type) => {
            const labelClass = cn(s.label, s[type]);
            return (
              <span key={type} className={labelClass}>
                {type}
              </span>
            );
          })}
        </div>
      </div>
      <div className={pictureWrap}>
        <img src={img || soon} alt={name} />
      </div>
      <Modal isShowing={isShowing} hide={toggle} data={pokemon} />
    </div>
  );
};

export default Pokemon;
