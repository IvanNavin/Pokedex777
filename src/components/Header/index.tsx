import React from 'react';

import cn from 'classnames';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <span className={s.logo} />
      <nav className={s.nav}>
        <div className={cn(s.item, s.active)}>Главная</div>
        <div className={s.item}>Покедеск</div>
        <div className={s.item}>Легендарные</div>
        <div className={s.item}>Документация</div>
      </nav>
    </header>
  );
};

export default Header;
