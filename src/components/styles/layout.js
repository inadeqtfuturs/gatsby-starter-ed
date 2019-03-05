import { css } from 'emotion';

const layout = css`
  display: flex;
  flex-direction: row;
  .invisible-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .wrap {
    position: absolute;
    width: 100%;
    transition: var(--sidebarTransition);
  }
  .open {
    transform: var(--sidebarTransform);
  }
`;

export default layout;
