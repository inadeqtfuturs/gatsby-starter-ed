import { css } from 'emotion';

const poem = css`
  /* Poem styles */

  /* If you want your lines not to wrap on small screens, add the rule "white-space: nowrap;"; If you want you want to remove the hanging indent, reset the padding-left to 0 and erase text-indent */

  ul {
    list-style: none;
    list-style-type: none;
    padding-left: 0rem;
  }

  ul li p {
    margin-bottom: 0rem;
  }

  span[class^='indent-'] {
    margin: 0; /* reset browsers default margin styles*/
  }

  /* To set line indentation for poetry wrap the line in a span, with a class="indent-x" attribute. The x is represents an rem (root em) value */

  ul ul {
    font-style: normal;
    padding-left: 1rem;
    margin-bottom: 0rem;
  }

  ul ul ul {
    font-style: normal;
    padding-left: 1rem;
    margin-bottom: 0rem;
  }

  .indent-1 {
    font-style: normal;
    padding-left: 1rem;
  }

  .indent-2 {
    font-style: normal;
    padding-left: 2rem;
  }

  .indent-3 {
    font-style: normal;
    padding-left: 3rem;
  }

  .indent-4 {
    font-style: normal;
    padding-left: 4rem;
  }

  .indent-5 {
    font-style: normal;
    padding-left: 5rem;
  }

  .indent-6 {
    font-style: normal;
    padding-left: 6rem;
  }

  .indent-7 {
    font-style: normal;
    padding-left: 7rem;
  }

  .indent-8 {
    font-style: normal;
    padding-left: 8rem;
  }

  .indent-9 {
    font-style: normal;
    padding-left: 9rem;
  }

  .indent-10 {
    font-style: normal;
    padding-left: 10rem;
  }

  .byline {
    font-style: italic;
    font-weight: 300;
    letter-spacing: 0;
    margin-top: -.5rem;
  }
  `;

export default poem;
