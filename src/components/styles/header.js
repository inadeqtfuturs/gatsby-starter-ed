import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [38];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const header = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
	text-align: center;
	padding-top: 1rem;
	padding-bottom: 1rem;
  border-bottom: 1px solid #eee;

.masthead {
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  ${mq({
    width: ['null', '32rem', '38rem'],
    minWidth: ['100%', '0', '0%']
  })};

  h1 {
    margin-top: 0;
    margin-bottom: 0;
    color: var(--linkColor);
  }
  
  small {
    font-family: var(--fontFamily);
    font-size: 1rem;
    font-weight: 300;
    color: $text-color;
    letter-spacing: .05rem;
  }
}

`;

export default header;
