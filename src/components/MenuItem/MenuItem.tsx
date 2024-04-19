import { useState, useCallback } from 'react';
import { Item } from 'src/App.types';
import './MenuItem.scss';
import RightArrowIcon from '@Svg/rightArrowIcon.svg?react';
import LeftArrowIcon from '@Svg/leftArrowIcon.svg?react';

type MenuItemProps = {
  items: Item[];
};

const MenuItem = ({ items }: MenuItemProps): JSX.Element => {
  const [menuStack, setMenuStack] = useState<Item[][]>([items]);
  const currentItems = menuStack[menuStack.length - 1];

  const handleItemClick = useCallback((items: Item[]) => {
    if (items.length > 0) {
      setMenuStack((current) => [...current, items]);
    }
  }, []);

  const goBack = useCallback(() => {
    if (menuStack.length > 1) {
      const newStack = menuStack.slice(0, -1);
      setMenuStack(newStack);
    }
  }, [menuStack]);

  return (
    <>
      {menuStack.length > 1 && (
        <button onClick={goBack} className="back-button" aria-label="Go back">
          <LeftArrowIcon />
        </button>
      )}
      <ul className="menu" role="menu">
        {currentItems.map(({ name, key, items }) => (
          <li key={key} role="menuitem" className="menu-item-enter">
            <button
              className="menu-item"
              onClick={() => handleItemClick(items)}
              aria-haspopup={items.length > 0 ? true : undefined}
              aria-expanded={items.length > 0 ? true : undefined}
            >
              <span className="menu-item-content">
                {name}
                {items.length > 0 && <RightArrowIcon />}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuItem;
