import React from 'react';
import { navigate } from 'hookrouter';
import Button from '../../components/Button';
import {ParallaxEffect} from "../../components/Parallax";
import { LinkEnum } from '../../routes';

import { ReactComponent as BG } from './assets/404.svg';
import Trio from './assets/Team_Rocket_trio.png';

import s from './404.module.scss';

const RedirectPage = () => {
    const {screenX, screenY} = ParallaxEffect();

    return (
    <div className={s.root}>
      <div className={s.titleblock}>
        <BG className={s.title} />
        <div className={s.trio}>
          <img src={Trio} alt="Trio" style={{
              transform: `translate(${screenY * 0.03}px, ${screenX * 0.05}px)`,
          }} />
        </div>
      </div>
      <div className={s.wrapper}>
        <span className={s.left}>На этот раз победила&nbsp;</span>
        <span className={s.right}>ракетная команда.</span>
      </div>
      <Button size="big" color="yellow" onClick={() => navigate(LinkEnum.HOME)}>
        Назад
      </Button>
    </div>
  );
};

export default RedirectPage;
