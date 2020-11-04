import React from 'react';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={s.footer}>
      <span>
        Сделано с{' '}
        <span role="img" aria-label="img">
          ❤️
        </span>
      </span>
      <span>Наша команда</span>
    </div>
  );
};

export default Footer;
