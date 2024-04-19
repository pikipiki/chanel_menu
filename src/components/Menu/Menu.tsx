import MenuItem from '@Components/MenuItem/MenuItem';
import { Item } from 'src/App.types';
import './Menu.scss';
import { memo } from 'react';

type MenuProps = {
  items: Item[];
};

const Menu = memo(({ items }: MenuProps): JSX.Element => {
  return (
    <nav className="wrapper" aria-label="Main navigation">
      <MenuItem items={items} />
    </nav>
  );
});

export default Menu;
