import React from 'react';
import cn from 'classnames';
import Heading from '../Heading';
import useModal from '../Modal/useModal';
import Modal from '../Modal';

import soon from './assets/soon.png';

import s from './Pokemon.module.scss';
import { PokemonsRequest } from '../../interface/pokemons';

const Pokemon = (pokemon: PokemonsRequest) => {
  const {
    types,
    name,
    img,
    stats: { attack, defense },
  } = pokemon;
  const { isShowing, toggle } = useModal();
  const pictureWrap = cn(s.pictureWrap, s[types[0] as keyof typeof s]);

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
            const labelClass = cn(s.label, s[type as keyof typeof s]);
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
