import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [38];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const toggleButton = css`
  position: fixed;
  z-index: 10;
  ${mq({
    top: ['1rem', '2rem'],
    left: ['1rem', '2rem'],
    padding: ['.25rem .5rem', '.5rem 1rem'],
    borderRadius: ['.25rem', '.5rem']
  })};
  border: solid 1px var(--textColor);
  cursor: pointer;
  color: var(--textColor);
  background-color: var(--backgroundColor);
  outline: 0;
  transition: var(--sidebarTransition);
  &.selected {
    color: var(--backgroundColor);
    background-color: var(--textColor); 
    transform: var(--sidebarTransform);
  }
`;

export default toggleButton;
