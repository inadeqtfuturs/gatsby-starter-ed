import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [21];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const sidebar = css`
  font-family: "PT Sans", Helvetica, Arial, sans-serif;
  color: rgba(255,255,255);
  background-color: var(--linkColor);
  top: 0;
  bottom:0;
  position:fixed;
  overflow-y:scroll;
  overflow-x:hidden; 
  &::-webkit-scrollbar {
    width: 2px;
  }
  width: 20rem;
  margin-left: -20rem;
  transition: var(--sidebarTransition);
  &.open {
    transform: var(--sidebarTransform);
  }
  .closeButton {
    ${mq({ display: ['flex', 'none'] })};
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: .25rem .5rem;
    border-radius: .25rem;
    z-index: 10;
    border: solid 1px var(--backgroundColor);
    cursor: pointer;
    color: var(--backgroundColor);
    background-color: var(--linkColor);
    outline: 0;
  }
`;

export default sidebar;
