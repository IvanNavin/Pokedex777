import React from 'react';
import Baner from '../../img/baner.png';

import s from './Content.module.scss';

const Footer = () => {
  return (
    <div className={s.content}>
      <div className={s.wrapper}>
        <div className={s.text}>
          <h1>
            <b>Найди</b> всех любимых <b>покемонов</b>
          </h1>
          <span>Вы можете узнать тип покемона, его сильные стороны, недостатки и способности</span>
          <button className="btn-green" type="button">
            Посмотреть покемонов
          </button>
        </div>
        <div className={s.imgwrapper}>
          <img className={s.image} src={Baner} alt="Изображение с покемоном" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
