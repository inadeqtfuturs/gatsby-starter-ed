---
title: "Documentation"
author: "ed."
date: 2018-12-29T10:52:33-6:00
type: "page"
menuItem: 2
menuTitle: "documentation"
toc: true
draft: true
---

## Prerequisites

Ed. is designed for users who may be brand new to markdown, have never used html or css, and perhaps don't even know javascript. In this way, it's fairly on the rails. Here are some resources you might look over before installing and developing with Ed.:

- [Viking Code School's Command Line Crash Course](https://www.vikingcodeschool.com/web-development-basics/a-command-line-crash-course)
  * Note that the main commands you'll need will be outlined below and/or in [Gatsby's documentation](https://www.gatsbyjs.org/docs/)
- [Code Academy's Intro. to HTML and CSS](https://www.codecademy.com/catalog/language/html-css)
- [Adam Pritchard's Github Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [VS Code for Gatsby](https://www.gatsbyjs.org/blog/2018-10-18-vscode-gatsby-development/)

## Getting Started

### Installing Gatsby

Ed. is built on [Gatsby](https://www.gatsbyjs.org), so you'll need to get Gatsby up and running. [Gatsby's Documentation](https://www.gatsbyjs.org/tutorial/part-zero/) is excellent, and describes the steps necessary to install Node.js, Git, and the Gatsby Command Line Interface (CLI). Below, you'll find a truncated outline to get started.

1. Install Node.js: Head to [Node.js](https://nodejs.org/) and follow the install instructions. Use terminal or a command prompt to verify that Node and npm were installed correctly by running (typing the command and pressing "enter") `node --version` and `npm --version`.
2. Install Git: Follow the instructions for your operating system to [install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
3. Install Gatsby CLI: Using terminal or a command prompt, run `npm install --global gatsby-cli`. This installs the Gatsby CLI gloabally, meaning that you can start a new Gatsby site anywhere on your computer.

### Installing Ed.

Once you're up and running with Gatsby, the only thing left to do is to clone the Ed. repo from GitHub. Using terminal, switch to the directory you want to work in and run the following:

``` bash
git clone https://github.com/
```

The only thing left to do is `cd` into your new Ed. folder and run Gatsby:

``` bash
cd ed-gatsby
gatsby develop
```

Ed. will start running on `localhost:8000` out of the box. Any errors you have will show up here. Assuming everything went well, let's start adding texts.

## Adding Pages

Adding a page to Ed. is as simple as adding a new markdown file to `pages` or `text` and running `gatsby develop` from terminal. The `pages` folder is meant to handle static pages for documentation, paratextual information, or anything else you'd want to include in your edition. The `text` folder handles the texts themselves.

There are two ways to get started with adding pages and texts to Ed. The first is to utilize the included examples, replacing their contents and renaming them the appropriate titles. The other is to make your own:

First, open your [plain text editor](https://en.wikipedia.org/wiki/Text_editor) of choice (I'm using [VS CODE](https://code.visualstudio.com/), but MacOS includes TextEdit and Windows includes WordPad). Add some basic frontmatter (we'll discuss this in depth in [Genres](/#Genres)) and some text of your own:

``` markdown
---
type: page
title: My New Page
author: ed
---

hello world!
```

The three dashes tell Gatsby where the markdown file's metadata is. Here, we're telling Gatsby that this is going to be a page called 'My New Page' and it was authored by 'ed'. Save the file as a `.md` file. For this example, I'll call it `my-new-page.md`. Finally, run `gatsby develop` from terminal and head to `localhost:8000/my-new-page`. You should be greeted with a new page.

Adding a text follows more or less the same procedure. Just add a new markdown file to the text folder, be sure to define the type of text it is (poem, drama, prose, or narrative), and save. Texts are nested under `/text` in the URL, so `my-new-poem.md` will generate a new poem page at `localhost:8000/text/my-new-poem`.

## Genres

Genre is handled by frontmatter in each markdown file.  Genre also determines how Ed. renders each file. Out of the box, Ed. handles poetry, drama, narrative, and prose. At a minimum, markdown files need to define three things: type, title, and author. Here's an example of frontmatter for a poem:

```markdown
---
type: poem
title: A Julia de Burgos
author: Julia de Burgos
editor: alex christie
source: n/a
draft: false
---
```

You can find stylesheets for individual genres in the `/src/components/styles` folder, where you can tweak the display to your liking. Below, you'll find an outline of the genres and the arguments they accept beyond the above defaults.

### Poetry

Used for poems. Accepts the following arguments:

```markdown
---
type: poem
title:
author:
editor:
source:
---
```

Poems are formatted as an unordered list, so each line must begin with `- `. Indenting lines of poetry has been made semantically easier with the [gatsby-remark-bracketed-spans](https://www.gatsbyjs.org/packages/gatsby-remark-bracketed-spans/) plugin. Class names are handled by the `poem.js` style sheet, and are injected via brackets in the poem's markdown. So, you can markup the beginning of Emily Dickinson's poem, "Delayed till she had ceased to know" as follows, and the third line will be indented twice.

```markdown
- DELAYED till she had ceased to know,
- Delayed till in its vest of snow
- [Her loving bosom lay.]{.indent-2}
```

### Drama

Used for drama. Accepts the following arguments:

```markdown
---
type: drama
title:
author:
editor:
source:
---
```

### Narrative

Used for long form narrative or narratives with chapters. Unlike poetry, drama, or prose, narrative also populates the sidebar menu with anchor links to each chapter. This is the default behavior for narrative. If you would prefer to retain your default menu as defined in the frontmatter of your pages, just define your narrative as "prose" (see below).

```markdown
---
type: narrative
title:
author:
editor:
source:
publication-date:
---
```

### Prose

Used for 'short' prose--so anything that doesn't require pagination or chapters as narrative might. Accepts the following arguments:

```markdown
---
type: prose
title:
author:
editor:
source:
---
```

## Footnotes

Footnotes can be placed anywhere in a markdown file using the following syntax:

```markdown
- O Captain! my Captain! our fearful trip is done;[^1]
- The ship has weather’d every rack, the prize we sought is won,

...

---

### Footnotes

[^1]: The author had just landed in La Guardia Airport after the flight captain died. All the passengers stood up to applaud the co-pilot...
```

Here's what's happening:

1. We mark a footnote in the text using `[^1]`. The footnote will be rendered in superscript and as a hyperlink to the footnote at the bottom of the page.
2. At the bottom of the markdown, we define a horizontal rule using `---` (for readability) and then provide a header using `### Footnotes`.
3. We begin a line with the corresponding footnote of the inline note we used earlier, and then write the note. This will also render an arrow that has a hyperlink that will take users back to the original line.

## Blockquotes

Blockquotes can be written using a `> `, with each line receiving its own right facing caret. An example that combines a blockquote and lines of poetry:

```markdown
  > - On a windy day let's go flying
  > - There may be no trees to rest on
  > - There may be no clouds to ride
  > - But we'll have our wings and the wind will be with us
  > - That's enough for me, that's enough for me.
```

## Table of Contents

While what differentiates prose and narrative pages is the table of contents that replaces the menu in a narrative page, you might want a prose page to have a table of contents that link down to the relevant headings (I'm thinking about navigating a longer article, for example). This documentation page, for example, renders the headings in `documentation.md` as a single table of contents. We do this by passing in `toc: true` into the markdown file's frontmatter, like this:

```markdown
---
title: "Documentation"
author: "ed."
date: 2018-12-29T10:52:33-6:00
type: "page"
menuItem: 2
menuTitle: "documentation"
toc: true
draft: true
---
```

By default, the table of contents is set to false. You only need to add this line if you *want* a table of contents.

## Bibliographies
(Coming Soon)

## Publishing
(Coming Soon)