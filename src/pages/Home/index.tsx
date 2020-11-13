import React from 'react';
import { navigate } from 'hookrouter';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';
import Button from '../../components/Button';
import { LinkEnum } from '../../routes';

import s from './Home.module.scss';
import Heading from '../../components/Heading';

const HomePage: React.FC = () => {
  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading tag="h1">
            <b>Найди</b> всех любимых <b>покемонов</b>
          </Heading>
          <p>Вы можете узнать тип покемона, его сильные стороны, недостатки и способности</p>
          <Button size="big" color="green" onClick={() => navigate(LinkEnum.POKEDEX)}>
            Посмотреть покемонов
          </Button>
        </div>
        <Parallax />
      </Layout>
    </div>
  );
};

export default HomePage;
