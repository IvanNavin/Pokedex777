import React from 'react';
import { navigate } from 'hookrouter';
import Button from '../../components/Button';

import Trio from './assets/Team_Rocket_trio.png';
import s from './404.module.scss';
import { LinkEnum } from '../../routes';

const RedirectPage = () => {
  return (
    <div className={s.root}>
      <div className={s.titleblock}>
        <div className={s.title}>404</div>
        <div className={s.trio}>
          <img src={Trio} alt="Trio" />
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
