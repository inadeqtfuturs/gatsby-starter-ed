import React from 'react';
import { cx } from 'emotion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import style from './styles/toggleButton';

library.add(fas)

const ToggleButton = props => {
  const { open, toggle, themeStyle=style  } = props;

  return (
    <button
      className={cx(themeStyle, [open ? 'selected' : ''])}
      onClick={toggle}
    >
      <FontAwesomeIcon icon={['fas', 'bars']} size={'lg'} />
    </button>
  );
};

export default ToggleButton;
