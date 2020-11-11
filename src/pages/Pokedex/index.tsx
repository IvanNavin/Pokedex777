import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Pokemon from "../../components/PokemonCard";

import {POKEMONS} from "./data"
import s from './Pokedex.module.scss';

const Pokedex = () => {
  return (
    <>
      <Header />
      <div className={s.root}>
          {
              POKEMONS.map((pokemon) => {
                  return <Pokemon {...pokemon} key={Date()} />
              })
          }
      </div>
      <Footer />
    </>
  );
};

export default Pokedex;
