import { css } from 'emotion';

const menu = css`
  border-bottom: 1px solid rgba(255,255,255,.1);
  section > ul {
    list-style-type: none;
    padding-left: 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
  a {
    display: block;
    padding: .5rem 1.5rem;
    border-top: 1px solid rgba(255,255,255,.1);
    color: var(--backgroundColor);
  }
  a.active, a:active, a:hover, a:focus {
    text-decoration: none;
    background-color: rgba(255,255,255,.1);
    border-color: transparent;
  }
  button {
    display: block;
    font-size: 1rem;
    cursor: pointer;
    width: 100%;
    text-align: left;
    padding: .5rem 1.5rem;
    border: none;
    border-top: 1px solid rgba(255,255,255,.1);
    background-color: var(--linkColor);
    color: var(--backgroundColor);
  }
  button.active, button:hover, button:focus {
    background-color: rgba(255,255,255,.1);
    border-color: transparent;
  }
  
`;

export default menu;
