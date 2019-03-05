import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [40];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const title = css`

`;

export default title;
