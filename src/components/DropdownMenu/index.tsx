import React, { useRef, useState } from 'react';
import cn from 'classnames';

import useDetectOutsideClick from './useDetectOutsideClick';
import s from './DropdownMenu.module.scss';

// type TPokemonType = 'grass' | 'poison' | 'fire' | 'flying' | 'water' | 'bug';

interface IDropdown {
  title: string;
  types: string[];
}
const DropdownMenu: React.FC<IDropdown> = ({ ...props }) => {
  const { title, types } = props;
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const [itemIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const dropClass = cn(s.menu, { [s.active]: isActive });

  return (
    <div>
      <div className={s.menuContainer}>
        <button type="button" onClick={onClick} className={s.menuTrigger}>
          <span>{title}</span>
        </button>
        <nav ref={dropdownRef} className={dropClass}>
          <ul>
            {types.map((item) => {
              return (
                <li className={cn(s.item, { [s.itemActive]: itemIsActive })} key={item}>
                  {item}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DropdownMenu;
