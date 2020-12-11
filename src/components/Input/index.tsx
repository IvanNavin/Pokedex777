import React from 'react';

import s from './Input.module.scss';

const Input = ({ ...props }): JSX.Element => {
  const { inputValue, onChange } = props;
  return (
    <input
      type="text"
      className={s.root}
      value={inputValue}
      onChange={onChange}
      placeholder="Найди своего покемона ..."
    />
  );
};

export default Input;
