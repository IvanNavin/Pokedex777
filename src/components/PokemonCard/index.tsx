import React from 'react';
import Heading from "../Heading";

import s from './Pokemon.module.scss';

interface Stats {
    hp?:                number;
    attack:            number;
    defense:           number;
    "special-attack"?:  number;
    "special-defense"?: number;
    speed?:             number;
}

export interface IPokemonsProps {
    name_clean?:      string;
    abilities?:       string[];
    stats:           Stats;
    types:           string[];
    img:             string;
    name:            string;
    base_experience?: number;
    height?:          number;
    id?:              number;
    is_default?:      boolean;
    order?:           number;
    weight?:          number;
}


const Pokemon = (pokemon: IPokemonsProps) => {
    const { types, name, img, stats: { attack, defense } } = pokemon;
    return (
        <div className={s.root}>
            <div className={s.infoWrap}>
                <Heading tag='h5' className={s.titleName}>
                    { name }
                </Heading>
                <div className={s.statWrap}>
                    <div className={s.statItem}>
                        <div className={s.statValue}>
                            { attack }
                        </div>
                        Атака
                    </div>
                    <div className={s.statItem}>
                        <div className={s.statValue}>
                            { defense }
                        </div>
                        Защита
                    </div>
                </div>
                <div className={s.labelWrap}>
                    {
                        types.map((type) => (
                            <span key={Date()} className={s.label}>{type}</span>
                        ))
                    }
                </div>
            </div>
            <div className={s.pictureWrap}>
                <img src={ img } alt={ name } />
            </div>
        </div>
    );
};

export default Pokemon;