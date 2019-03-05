import React from 'react';

import style from './styles/digest'

const Digest = props => {
  const { items, themeStyle=style } = props;

  return (
    <div className={themeStyle}>
      <h2>Contents</h2>
      <p dangerouslySetInnerHTML={{ __html: items}} />
    </div>
  );
};

export default Digest;
