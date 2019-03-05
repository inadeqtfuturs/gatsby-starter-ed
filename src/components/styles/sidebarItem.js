import { css } from 'emotion';

const sidebarItem = css`
  padding: 1.5rem;
  p:last-child {
    margin-bottom: 0;
  }
  a {
    font-weight: normal;
    color: var(--backgroundColor);
  }
`;

export default sidebarItem;
