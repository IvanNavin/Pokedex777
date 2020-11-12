import React from 'react';

import s from './Input.module.scss';

interface IInput {
  type: string;
}

const Input: React.FC<IInput> = ({ type }) => {
  return <input type={type} className={s.root} placeholder="Найди своего покемона ..." />;
};

export default Input;
