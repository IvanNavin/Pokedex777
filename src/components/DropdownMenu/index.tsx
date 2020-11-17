import React, { useRef, useState } from 'react';
import cn from 'classnames';

import useDetectOutsideClick from './useDetectOutsideClick';
import s from './DropdownMenu.module.scss';

// type TPokemonType = 'grass' | 'poison' | 'fire' | 'flying' | 'water' | 'bug';

interface IDropdown {
  title: string;
  types: string[];
  filter: React.Dispatch<React.SetStateAction<{}>>;
}
const DropdownMenu: React.FC<IDropdown> = ({ ...props }) => {
  const { title, types, filter } = props;
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const [itemIsActive, setItemIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const dropClass = cn(s.menu, { [s.active]: isActive });

  const filterFn = (ev: React.MouseEvent<HTMLElement>): void => {
    setItemIsActive(!itemIsActive);
    filter((s) => ({
      /* not working */ ...s,
      // name: (ev.target as any).value
      name: ev.currentTarget.textContent,
    }));
  };

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
                <li className={cn(s.item, { [s.itemActive]: itemIsActive })} key={item} onClick={filterFn}>
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
