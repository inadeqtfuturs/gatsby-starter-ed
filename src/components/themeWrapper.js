import React from 'react';
import { injectGlobal } from 'emotion';

const ThemeWrapper = props => {
  const { children, theme } = props;

  let baseColor
  switch(theme) {
    case "blue":
      baseColor = `#6a9fb5`
      break;
    case "brown":
      baseColor = `#8f5536`
      break;
    case "cyan":
      baseColor = `#75b5aa`
      break;
    case "green":
      baseColor = `#90a959`
      break;
    case "magenta":
      baseColor = `#aa759f`
      break;
    case "orange":
      baseColor = `#d28445`
      break
    case "red":
      baseColor = `#841212`
      break;
    default:
      baseColor = `#841212`
  }

  injectGlobal`
    :root {
      --linkColor: ${baseColor}
    }
  `;

  return (
    <>
      {children}
    </>
  );
};

export default ThemeWrapper;
