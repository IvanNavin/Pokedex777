import React, { useRef } from 'react';
import cn from 'classnames';

import useDetectOutsideClick from './useDetectOutsideClick';
import s from './DropdownMenu.module.scss';

interface IDropdown {
  title: string;
  types: string[];
  activeTypes: Map<any, any>;
  isActiveMenu: boolean;
  onToggle: any;
}
const DropdownMenu: React.FC<IDropdown> = ({ ...props }) => {
  const { title, types, activeTypes, isActiveMenu, onToggle } = props;
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, isActiveMenu);
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
            {types.map((type) => {
              return (
                <li
                  className={cn(s.item, { [s.itemActive]: activeTypes.has(type) })}
                  onClick={() => onToggle(type, isActive)}
                  key={type}>
                  {type}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default React.memo(DropdownMenu);
