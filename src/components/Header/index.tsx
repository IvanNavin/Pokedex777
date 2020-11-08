import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import s from './Header.module.scss';

import { ReactComponent as Logo } from './assets/Logo.svg';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Главная',
    link: '/',
  },
  {
    id: 2,
    value: 'Покедеск',
    link: '/pokedex',
  },
  {
    id: 3,
    value: 'Легендарные',
    link: '/legendary',
  },
  {
    id: 4,
    value: 'Документация',
    link: '/documentation',
  },
];

const Header = () => {
  const location = useLocation();
  return (
    <header className={s.root}>
      <div className={s.wrap}>
        <Logo className={s.pokemonLogo} />
        <nav className={s.menuWrap}>
          {MENU.map(({ id, value, link }) => {
            const isCurrentPath = location.pathname === link;
            const headerClass = cn(s.menuLink, { [s.activeLink]: isCurrentPath });
            return (
              <Link key={id} to={link} className={headerClass}>
                {value}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
