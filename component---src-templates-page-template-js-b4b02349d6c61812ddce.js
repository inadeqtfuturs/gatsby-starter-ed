(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{162:function(e,t,r){"use strict";r.r(t);var a=r(7),o=(r(0),r(169)),n=r(171),i=r(164),l=Object(i.a)({name:"17tr4yy",styles:"ul{margin-left:1rem;}li ul{margin-left:0;}ul,li p{margin-bottom:0;}"}),s=function(e){var t=e.items,r=e.themeStyle,o=void 0===r?l:r;return Object(a.a)("div",{className:o},Object(a.a)("h2",null,"Contents"),Object(a.a)("p",{dangerouslySetInnerHTML:{__html:t}}))};r.d(t,"query",function(){return c});t.default=function(e){var t=e.data.markdownRemark,r=t.html,i=t.excerpt,l=t.tableOfContents,c=t.frontmatter,d=c.title,m=c.toc;return console.log(l),Object(a.a)(o.a,null,Object(a.a)(n.a,{title:d,description:i}),Object(a.a)("h2",{dangerouslySetInnerHTML:{__html:d}}),m&&Object(a.a)(s,{items:l}),Object(a.a)("p",{dangerouslySetInnerHTML:{__html:r}}))};var c="996570361"},167:function(e){e.exports={data:{site:{siteMetadata:{title:"Ed.",subtitle:"a gatsby theme for minimal editions",theme:"",sidebar:{description:"Ed. is a Gatsby theme designed for textual editors based on minimal computing principles, and focused on legibility and flexibility.",licence:"Currently in beta. Distributed with MIT licence."}}}}}},168:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{menuTitle:"home"},fields:{slug:"/"}}},{node:{frontmatter:{menuTitle:"documentation"},fields:{slug:"/documentation/"}}},{node:{frontmatter:{menuTitle:"about"},fields:{slug:"/about/"}}}]}}}},169:function(e,t,r){"use strict";var a=r(8),o=r.n(a),n=r(164),i=r(7),l=r(167),s=r(0),c=r.n(s),d=r(61),m=(r(173),r(165)),b=Object(m.a)([38].map(function(e){return"@media (min-width: "+e+"rem)"})),u=Object(n.a)("display:flex;flex-direction:row;justify-content:space-between;align-items:center;text-align:center;padding-top:1rem;padding-bottom:1rem;border-bottom:1px solid #eee;.masthead{padding-left:1rem;padding-right:1rem;margin-left:auto;margin-right:auto;",b({width:["null","32rem","38rem"],minWidth:["100%","0","0%"]}),";h1{margin-top:0;margin-bottom:0;color:var(--linkColor);}small{font-family:var(--fontFamily);font-size:1rem;font-weight:300;color:$text-color;letter-spacing:.05rem;}}"),p=function(e){var t=e.title,r=e.sub,a=e.themeStyle,o=void 0===a?u:a;return Object(i.a)("header",{className:o},Object(i.a)("div",{className:"masthead"},Object(i.a)("h1",null,Object(i.a)(d.Link,{to:"/"},t)),Object(i.a)("small",null,r)))},f=Object(m.a)([38,56].map(function(e){return"@media (min-width: "+e+"rem)"})),g=Object(n.a)('display:flex;flex-direction:column;flexGrow:1;padding:0 1rem 3rem 1rem;margin-left:auto;margin-right:auto;h1,h2,h3,h4,h5,h6{font-family:"PT Sans",Helvetica,Arial,sans-serif;font-weight:100;}',f({width:["null","36rem","44rem"]}),";"),h=function(e){var t=e.children,r=e.themeStyle,a=void 0===r?g:r;return Object(i.a)("div",{className:a},t)},v=r(168),y=Object(n.a)({name:"9i15va",styles:"border-bottom:1px solid rgba(255,255,255,.1);a{display:block;padding:.5rem 1.5rem;border-top:1px solid rgba(255,255,255,.1);color:var(--backgroundColor);}a.active,a:active,a:hover,a:focus{text-decoration:none;background-color:rgba(255,255,255,.1);border-color:transparent;}button{display:block;font-size:1rem;cursor:pointer;width:100%;text-align:left;padding:.5rem 1.5rem;border:none;border-top:1px solid rgba(255,255,255,.1);background-color:var(--linkColor);color:var(--backgroundColor);}button.active,button:hover,button:focus{background-color:rgba(255,255,255,.1);border-color:transparent;}"}),O=function(e){return Object(i.a)(d.StaticQuery,{query:"4229503405",render:function(t){var r=t.allMarkdownRemark.edges,a=e.themeStyle,o=void 0===a?y:a;return Object(i.a)("nav",{className:o},r.map(function(e){var t=e.node,r=t.frontmatter.menuTitle,a=t.fields.slug;return Object(i.a)(d.Link,{to:a,activeClassName:"active",key:r},r)}))},data:v})},j=(r(40),r(83),r(39)),k=r.n(j),x=function(e){function t(t){var r;return(r=e.call(this,t)||this).toggleClass=r.toggleClass.bind(k()(r)),r.state={activeIndex:0},r}o()(t,e);var r=t.prototype;return r.toggleClass=function(e,t){this.setState({activeIndex:e})},r.render=function(){var e=this,t=this.props,r=t.title,a=t.chapters,o=t.themeStyle,n=void 0===o?y:o,l=a.replace(/(<ul>|<li>|<\/ul>|<\/li>|<a href="|\r\n|\n|\r)/g,"").split("</a>").slice(0,-1).map(function(e){return e.split('">')});return Object(i.a)("nav",{className:n},Object(i.a)(d.Link,{to:"/"},"Home"),Object(i.a)("a",{href:"#title"},r),l.map(function(t,r){return Object(i.a)("a",{href:t[0],onClick:e.toggleClass.bind(e,r),className:e.state.activeIndex===r?"active":null,key:r},t[1])}))},t}(s.Component),w=Object(n.a)({name:"1nof7jj",styles:"padding:1.5rem;p:last-child{margin-bottom:0;}a{font-weight:normal;color:var(--backgroundColor);}"}),C=function(e){var t=e.children,r=e.themeStyle,a=void 0===r?w:r;return Object(i.a)("div",{className:a},t)},T=r(166),S=Object(m.a)([21].map(function(e){return"@media (min-width: "+e+"rem)"})),M=Object(n.a)('font-family:"PT Sans",Helvetica,Arial,sans-serif;color:rgba(255,255,255);background-color:var(--linkColor);top:0;bottom:0;position:fixed;overflow-y:scroll;overflow-x:hidden;&::-webkit-scrollbar{width:2px;}width:20rem;margin-left:-20rem;transition:var(--sidebarTransition);&.open{transform:var(--sidebarTransform);}.closeButton{',S({display:["flex","none"]}),";position:absolute;top:1rem;right:1rem;padding:.25rem .5rem;border-radius:.25rem;z-index:10;border:solid 1px var(--backgroundColor);cursor:pointer;color:var(--backgroundColor);background-color:var(--linkColor);outline:0;}"),z=function(e){var t=e.open,r=e.toggle,a=e.sidebar,o=e.title,l=e.chapters,s=e.themeStyle,c=void 0===s?M:s,d=a.description,m=a.licence;return Object(i.a)("div",{className:Object(n.b)(c,[t?"open":"close"])},Object(i.a)(C,null,Object(i.a)("button",{className:Object(n.b)("closeButton",[t?"selected":""]),onClick:r},Object(i.a)(T.a,{icon:["fas","times"],size:"lg"})),d),l?Object(i.a)(x,{title:o,chapters:l}):Object(i.a)(O,null),Object(i.a)(C,null,m))},N=r(170),H=r(174),F=Object(m.a)([38].map(function(e){return"@media (min-width: "+e+"rem)"})),I=Object(n.a)("position:fixed;z-index:10;",F({top:["1rem","2rem"],left:["1rem","2rem"],padding:[".25rem .5rem",".5rem 1rem"],borderRadius:[".25rem",".5rem"]}),";border:solid 1px var(--textColor);cursor:pointer;color:var(--textColor);background-color:var(--backgroundColor);outline:0;transition:var(--sidebarTransition);&.selected{color:var(--backgroundColor);background-color:var(--textColor);transform:var(--sidebarTransform);}");N.b.add(H.a);var L=function(e){var t=e.open,r=e.toggle,a=e.themeStyle,o=void 0===a?I:a;return Object(i.a)("button",{className:Object(n.b)(o,[t?"selected":""]),onClick:r},Object(i.a)(T.a,{icon:["fas","bars"],size:"lg"}))},_=function(e){var t,r=e.children;switch(e.theme){case"blue":t="#6a9fb5";break;case"brown":t="#8f5536";break;case"cyan":t="#75b5aa";break;case"green":t="#90a959";break;case"magenta":t="#aa759f";break;case"orange":t="#d28445";break;case"red":t="#841212";break;default:t="#841212"}return Object(n.c)(":root{--linkColor:",t,"}"),Object(i.a)(c.a.Fragment,null,r)},q=(Object(n.c)({name:"1dt5j5w",styles:":root{--textColor:#454545;--textHeadingColor:#404040;--linkColor:#841212;--fontFamily:serif;--fontFamilyHeader:serif;--fontFamilyPara:sans-serif;--fontSize:16px;--backgroundColor:#fff;--sidebarTransition:transform ease-in-out .5s;--sidebarTransform:translateX(20rem);--scrollBarThumb:#eaeaea;--scrollBarTrack:#f9f9f9;--scrollBarWidth:2px;}"}),Object(n.c)({name:"14j6zwe",styles:'*{box-sizing:border-box;}html,body{margin:0;padding:0;overflow-x:hidden;}html{font-family:var(--fontFamily);font-size:var(--fontSize);line-height:1.5;}body{color:var(--textColor);background-color:var(--backgroundColor);}h1,h2,h3,h4,h5,h6{font-family:var(--fontFamilyHeader);margin:1rem 0 .5rem 0;font-weight:300;color:var(--textHeadingColor);letter-spacing:-.025rem;line-height:1;text-rendering:optimizeLegibility;}h1{font-size:2.5rem;}h2{font-size:2rem;}h3,h4{font-size:1.5rem;}h5,h6{font-size:1rem;}p{margin-top:0;margin-bottom:1rem;}a,.text-title a{color:var(--linkColor);text-decoration:none;}a:hover,a:focus{text-decoration:underline;}ul{list-style:circle;}ul,ol{margin-top:0;margin-bottom:1rem;padding-left:1rem;li p,li ul{margin-bottom:0rem;}}.footnotes{[id*="fn-"]{p{margin-bottom:0rem;display:inline;}}hr{display:none;}}hr{margin-top:3rem;position:relative;margin:1.5rem 0;border:0;border-top:1px solid #eee;border-bottom:1px solid var(--backgroundColor);}pre[class*="language-"]{margin:.5em .5rem;font-size:.85rem;}:not(pre) > code[class*="language-"]{padding:.1em .5em;font-size:.85rem;}'}),Object(n.a)({name:"16aptul",styles:"display:flex;flex-direction:row;.invisible-scrollbar::-webkit-scrollbar{display:none;}.wrap{position:absolute;width:100%;transition:var(--sidebarTransition);}.open{transform:var(--sidebarTransform);}"})),B=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={isOpen:!1},r}o()(t,e);var r=t.prototype;return r.toggleMenu=function(){this.setState({isOpen:!this.state.isOpen})},r.render=function(){var e=this,t=this.props,r=t.children,a=t.themeStyle,o=void 0===a?q:a,s=t.title,c=t.chapters;return Object(i.a)(d.StaticQuery,{query:E,render:function(t){return Object(i.a)(_,{theme:t.site.siteMetadata.theme},Object(i.a)("div",{className:o},Object(i.a)(z,{open:e.state.isOpen,toggle:function(){return e.toggleMenu()},sidebar:t.site.siteMetadata.sidebar,title:s,chapters:c}),Object(i.a)(L,{open:e.state.isOpen,toggle:function(){return e.toggleMenu()}}),Object(i.a)("div",{className:Object(n.b)("wrap",[e.state.isOpen?"open":"close"])},Object(i.a)(p,{title:t.site.siteMetadata.title,sub:t.site.siteMetadata.subtitle}),Object(i.a)(h,null,r))))},data:l})},t}(s.Component),E=(t.a=B,"1389976522")},171:function(e,t,r){"use strict";var a=r(7),o=r(172),n=(r(0),r(1)),i=r.n(n),l=r(175),s=r.n(l),c=r(61);function d(e){var t=e.title,r=e.author,n=e.description,i=e.image,l=e.lang,d=e.meta,b=e.keywords;return Object(a.a)(c.StaticQuery,{query:m,render:function(e){var o=n||e.site.siteMetadata.description,c=t||e.site.siteMetadata.title,m=r||e.site.siteMetadata.author,u=i||e.site.siteMetadata.logo;return Object(a.a)(s.a,{htmlAttributes:{lang:l},title:t,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:c},{property:"og:description",content:o},{property:"og:image",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:m},{name:"twitter:title",content:c},{name:"twitter:description",content:o}].concat(b.length>0?{name:"keywords",content:b.join(", ")}:[]).concat(d)})},data:o})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=d;var m="1900499496"},172:function(e){e.exports={data:{site:{siteMetadata:{title:"Ed.",description:"Ed. Gatsby is a starter for Gatsby based on the Jekyll theme for Ed",author:"@inadeqt_futurs",logo:"/content/images/ed.png"}}}}}}]);
//# sourceMappingURL=component---src-templates-page-template-js-b4b02349d6c61812ddce.js.map