import React from 'react'

import Menu from './menu'
import NarrativeMenu from './narrativeMenu'
import SidebarItem from './sidebarItem'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { cx } from 'emotion'
import style from './styles/sidebar';

const Sidebar = props => {
  const { open, toggle, sidebar, title, chapters, themeStyle=style } = props;
  const { description, licence } = sidebar;

  return (
    <div className={cx(themeStyle, [open ? 'open' : 'close'])}>
      <SidebarItem>
        <button
          className={cx('closeButton', [open ? 'selected' : ''])}
          onClick={toggle}
        >
          <FontAwesomeIcon icon={['fas', 'times']} size={'lg'} />
        </button>
        {description}
      </SidebarItem>
      
        { chapters 
          ? <NarrativeMenu 
              title={title}
              chapters={chapters}
            /> 
          : <Menu /> }
      <SidebarItem>{licence}</SidebarItem>
    </div>
  );
};

export default Sidebar;
