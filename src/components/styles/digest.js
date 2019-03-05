import { css } from 'emotion';

const tableOfContents = css`
  ul {
    margin-left: 1rem;
  }
  li ul {
    margin-left: 0;
  }
  ul, li p {
    margin-bottom: 0;
  }
`;

export default tableOfContents;
