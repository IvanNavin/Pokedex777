import React from 'react';
import HomePage from './pages/Home';
import Pokedex from './pages/Pokedex';
import RedirectPage from './pages/404';

interface IGeneralMenu {
  title: string;
  link: LinkEnum;
  component: () => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: 'Главная',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Покедеск',
    link: LinkEnum.POKEDEX,
    component: () => <Pokedex />,
  },
  {
    title: 'Легендарные',
    link: LinkEnum.LEGENDARIES,
    component: () => <RedirectPage />,
  },
  {
    title: 'Документация',
    link: LinkEnum.DOCUMENTATION,
    component: () => <RedirectPage />,
  },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
