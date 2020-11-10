import React from 'react';
import Heading from "../Heading";

import s from './PokemonCard.module.scss';

const PokemonCard = () => {
    return (
        <div className={s.root}>
            <div className={s.infoWrap}>
                <Heading tag='h5' className={s.titleName}>
                    Charmander
                </Heading>
                <div className={s.statWrap}>
                    <div className={s.statItem}>
                        <div className={s.statValue}>
                            52
                        </div>
                        Атака
                    </div>
                    <div className={s.statItem}>
                        <div className={s.statValue}>
                            43
                        </div>
                        Защита
                    </div>
                </div>
                <div className={s.labelWrap}>
                    <span className={s.label}>Луг</span>
                    <span className={s.label}>Яд</span>
                </div>
            </div>
            <div className={s.pictureWrap}>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" alt="Charmander" />
            </div>
        </div>
    );
};

export default PokemonCard;