import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Parallax from '../../components/Parallax';
import Button from '../../components/Button';

import s from './Home.module.scss';
import Heading from '../../components/Heading';

interface HomeProps {
  history: {
    push(url: string): void;
  };
}

const HomePage: React.FC<HomeProps> = (props) => {
  const {
    history: { push },
  } = props;
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading tag="h1">
            <b>Найди</b> всех любимых <b>покемонов</b>
          </Heading>
          <p>Вы можете узнать тип покемона, его сильные стороны, недостатки и способности</p>
          <Button size="big" color="green" onClick={() => push('/pokedex')}>
            Посмотреть покемонов
          </Button>
        </div>
        <Parallax />
      </Layout>
      <Footer />
    </div>
  );
};

export default HomePage;
