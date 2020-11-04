import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

import s from './App.module.scss';

const App = () => {
  return (
    <div className={s.layout}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
