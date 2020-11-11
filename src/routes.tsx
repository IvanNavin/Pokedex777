import React from "react";
import HomePage from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import RedirectPage from "./pages/404";

interface IGeneralMenu {
    title: string,
    link: string,
    component: () => JSX.Element
}

export const GENERAL_MENU: IGeneralMenu[] = [
    {
        title: 'Главная',
        link: '/',
        component: () => <HomePage />
    },
    {
        title: 'Покедеск',
        link: '/pokedex',
        component: () => <Pokedex />
    },
    {
        title: 'Легендарные',
        link: '/legendary',
        component: () => <RedirectPage />
    },
    {
        title: 'Документация',
        link: '/documentation',
        component: () => <RedirectPage />
    },
];

interface IAccMenu {
    [n: string]: () => JSX.Element
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
    acc[item.link] = item.component;
    return acc;
}, {});

export default routes;