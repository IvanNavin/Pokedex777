import React from 'react';
import Heading from '../../components/Heading';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Pokedex = () => {
  return (
    <>
      <Header />
      <Heading tag="h3">
        800 <b>покемонов</b> на выбор
      </Heading>
      <Footer />
    </>
  );
};

export default Pokedex;
