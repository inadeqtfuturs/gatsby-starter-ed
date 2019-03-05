import { injectGlobal } from 'emotion';

const global = injectGlobal`

  /* Ed: the minimal edition theme. */
  /* Based on the Ed theme by @elotroalex and brill friends (https://github.com/minicomp/ed) */
  /* To apply a different color scheme to the whole scroll down to the themes section for instructions */


  /* General -- css foundation */

  * {
    box-sizing: border-box;
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  
  html {
    font-family: var(--fontFamily);
    font-size: var(--fontSize);
    line-height: 1.5;
  }
  
  body {
    color: var(--textColor);
    background-color: var(--backgroundColor);
  }


  /* headings */

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--fontFamilyHeader);
    margin: 1rem 0 .5rem 0;
    font-weight: 300;
    color: var(--textHeadingColor);
    letter-spacing: -.025rem;
    line-height: 1;
    text-rendering: optimizeLegibility;
  }
  
  h1 {
    font-size: 2.5rem;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  h3, h4 {
    font-size: 1.5rem;
  }

  h5, h6 {
    font-size: 1rem;
  }
  

  /* Body text */

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }


  /* Links */

  a, .text-title a {
    color: var(--linkColor);
    text-decoration: none;
  }

  /* :focus is linked to :hover for basic accessibility */
  a:hover,
  a:focus {
    text-decoration: underline;
  }
   
  /* Lists */
  
  ul {
    list-style: circle;
  }
  
  ul, ol {
    margin-top: 0;
    margin-bottom: 1rem;
    padding-left: 1rem;
    li p, li ul {
      margin-bottom: 0rem;
    }
  }
  

  /* Footnotes */

  .footnotes {
    [id*="fn-"] {
      p {
        margin-bottom: 0rem;
        display: inline;
      }
    }
    hr {
      display: none;
    }
  }
  
  /* Horizontal ruler */
  
  hr {
    margin-top: 3rem;
    position: relative;
    margin: 1.5rem 0;
    border: 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid var(--backgroundColor);
  }

  /* Prism highlighting */

  /* Code blocks */
  pre[class*="language-"] {
    margin: .5em .5rem;
    font-size: .85rem;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: .1em .5em;
    font-size: .85rem;
  }
  
`;

export default global;