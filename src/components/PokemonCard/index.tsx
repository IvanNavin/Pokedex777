import React from 'react';
import cn from 'classnames';
import Heading from '../Heading';

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

type TGradientType =
  | 'grayGradient'
  | 'blueGradient'
  | 'colorGradient'
  | 'pinkGRadient'
  | 'greenGradient'
  | 'goldGradient'
  | 'yellowGradient'
  | 'redGradientCard';

interface IPokemonStats {
  attack: number;
  defense: number;
  hp?: number;
  'special-attack'?: number;
  'special-defense'?: number;
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
  const gradientArr: Array<TGradientType> = [
    'grayGradient',
    'blueGradient',
    'colorGradient',
    'pinkGRadient',
    'greenGradient',
    'goldGradient',
    'yellowGradient',
    'redGradientCard',
  ];
  const gradient = gradientArr[Math.floor(Math.random() * gradientArr.length)];
  const pictureWrap = cn(s.pictureWrap, s[gradient]);

  return (
    <div className={s.root}>
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
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default Pokemon;
