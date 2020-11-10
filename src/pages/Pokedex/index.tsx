import React from 'react';
import Heading from '../../components/Heading';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// @ts-ignore
import data from './assets/pokemon.json';

import s from './Pokedex.module.scss';


const Pokedex = () => {
    const pokemons = data;
    console.log('pokemons: ', pokemons)
  return (
    <>
      <Header />
      {/*<Heading tag="h3">*/}
      {/*  800 <b>покемонов</b> на выбор*/}
      {/*</Heading>*/}
      <div className={s.root}>
          {
              pokemons.map(() => console.log('pokemon'))
          }
      </div>
      <Footer />
    </>
  );
};

export default Pokedex;
