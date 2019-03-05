import React from 'react';
import { Link } from 'gatsby';

import style from './styles/header';

const Header = props => {
  const { title, sub, themeStyle=style } = props;

  return (
    <header className={themeStyle}>
      
      <div className={'masthead'}>
        <h1>
          <Link to={'/'}>{title}</Link>
        </h1>
        <small>{sub}</small>
      </div>
    </header>
  );
};

export default Header;
