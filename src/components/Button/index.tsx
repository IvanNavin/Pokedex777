import React from 'react';

import cn from 'classnames';
import s from './Button.module.scss';

interface ButtonProps {
  size?: 'big' | 'small';
  color?: 'green' | 'yellow';
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isWide?: boolean;
}

const Button: React.FC<ButtonProps> = ({ isWide = false, size = 'big', color = 'green', children, onClick }) => {
  const btnClass = cn(s.root, s[size], s[color], { [s.wide]: isWide });

  return (
    <button type="button" className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
