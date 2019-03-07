import { injectGlobal } from 'emotion';

const variables = injectGlobal`
  :root {
    --textColor: #454545;
    --textHeadingColor: #404040;

    --linkColor: #841212;

    --fontFamily: serif;
    --fontFamilyHeader: serif;
    --fontFamilyPara: sans-serif;

    --fontSize: 16px;

    --backgroundColor: #fff;

    --sidebarTransition: transform ease-in-out .5s;
    --sidebarTransform: translateX(20rem);

    --scrollBarThumb: #eaeaea;
    --scrollBarTrack: #f9f9f9;
    --scrollBarWidth: 2px;
  }
`;

export default variables;
