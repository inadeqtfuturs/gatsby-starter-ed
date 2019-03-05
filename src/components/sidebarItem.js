import React from 'react';

import style from './styles/sidebarItem';

const sidebarItem = props => {
  const { children, themeStyle=style } = props;

  return (
    <div className={themeStyle}>{children}</div>
  );
};

export default sidebarItem;
