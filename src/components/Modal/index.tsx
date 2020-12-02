import React from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';

import Heading from '../Heading';

import soon from './assets/soon.png';

import s from './Modal.module.scss';
import { PokemonsRequest } from '../../interface/pokemons';

interface IModal {
  isShowing: boolean;
  hide: () => void;
  data: PokemonsRequest;
}

const Modal: React.FC<IModal> = ({ isShowing, hide, data }) => {
  const {
    abilities,
    base_experience,
    name,
    img,
    types,
    id,
    stats: { attack, defense, hp },
  } = data;

  const imageBackground = cn(s.pokeWrap, s[types[0] as keyof typeof s]);

  return isShowing
    ? ReactDOM.createPortal(
        <>
          <div className={s.modalRoot}>
            <div className={s.container}>
              <button type="button" className={s.button} data-dismiss="modal" aria-label="Close" onClick={hide}>
                <span aria-hidden="true">&times;</span>
              </button>
              <div className={imageBackground}>
                <img src={img || soon} alt={name} />
                <div className={s.modalLabelWrap}>
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
              <div className={s.statPokeWrap}>
                <div className={s.row}>
                  <Heading tag="h5" className={s.header}>
                    {name}
                  </Heading>
                  <span className={s.generation}>Поколение 1</span>
                  <span className={s.id}>{id}</span>
                </div>
                <div className={s.abilities}>
                  <span>Способности</span>
                  {abilities?.map((skill, index) => {
                    return (
                      <span key={skill}>
                        {index !== 0 && '-'}
                        {skill}
                      </span>
                    );
                  })}
                </div>
                <div className={s.healthExp}>
                  <div className={s.health}>
                    <span>Очки здоровья</span>
                    <span className={s.points}>{hp}</span>
                    <div className={s.progressBar}>
                      <div className={s.progress} style={{ width: '20%' }} />
                    </div>
                  </div>
                  <div className={s.exp}>
                    <span>Опыт</span>
                    <span className={s.points}>{base_experience}</span>
                    <div className={s.progressBar}>
                      <div className={s.progress} style={{ width: '60%' }} />
                    </div>
                  </div>
                </div>
                <div className={s.stat}>
                  <div className={s.box}>
                    <div className={s.circle}>{attack}</div>
                    Защита
                  </div>
                  <div className={s.box}>
                    <div className={s.circle}>{defense}</div>
                    Атака
                  </div>
                  <div className={s.box}>
                    <div className={s.circle}>{data.stats['special-attack']}</div>
                    Специальная атака
                  </div>
                  <div className={s.box}>
                    <div className={s.circle}>{data.stats['special-defense']}</div>
                    Специальная защита
                  </div>
                </div>
              </div>
            </div>
            <div className={s.transparent} />
          </div>
        </>,
        document.body,
      )
    : null;
};

export default Modal;
