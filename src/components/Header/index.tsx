import React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';

import { ReactComponent as Logo } from './assets/Logo.svg';
import { GENERAL_MENU } from '../../routes';

import s from './Header.module.scss';

const Header = () => {
  const location = usePath();
  return (
    <header className={s.root}>
      <div className={s.wrap}>
        <Logo className={s.pokemonLogo} />
        <nav className={s.menuWrap}>
          {GENERAL_MENU.map(({ title, link }) => (
            <A
              key={title}
              href={link}
              className={cn(s.menuLink, {
                [s.activeLink]: link === location,
              })}>
              {title}
            </A>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
