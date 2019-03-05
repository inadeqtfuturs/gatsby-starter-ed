import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [38, 56];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const main = css`
  display: flex;
  flex-direction: column;
  flexGrow: 1;
  padding: 0 1rem 3rem 1rem;
  margin-left:  auto;
  margin-right: auto;
  h1, h2, h3, h4, h5, h6 {
    font-family: "PT Sans", Helvetica, Arial, sans-serif;
    font-weight: 100;
  }
  ${mq({
    width: ['null', '36rem', '44rem'],
  })};
`;

export default main;
