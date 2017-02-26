import React from 'react';
import { Menu } from 'semantic-ui-react';

export const HeaderComponent = () => {
  const { Item } = Menu;
  return (
    <Menu pointing secondary>
      <Item>
        Home
      </Item>
    </Menu>
  );
};

export default HeaderComponent;