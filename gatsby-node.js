const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const Promise = require('bluebird');
const _ = require(`lodash`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      pages: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "page" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              type
            }
            fields {
              slug
            }
            html
          }
        }
      }
      narratives: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "narrative" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              author
              type
            }
            fields {
              slug
            }
            html
          }
        }
      }
      texts: allMarkdownRemark(
        filter: { frontmatter: { type: { in: ["poem", "drama", "prose"] } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              type
            }
            fields {
              slug
            }
            html
          }
        }
      }
    }
  `).then(result => {
    //type?
    const pages = result.data.pages.edges;
    const narratives = result.data.narratives.edges;
    const texts = result.data.texts.edges;
    //build based on type
    generatePage(createPage, pages);
    generateNarrative(createPage, narratives);
    generateText(createPage, texts);
  });
};

//define defaults
const page = path.resolve(`./src/templates/pageTemplate.js`);
const text = path.resolve(`./src/templates/textTemplate.js`);
const narrative = path.resolve(`./src/templates/narrativeTemplate.js`);

function generatePage(createPage, pages) {
  pages.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: page,
      context: {
        slug: node.fields.slug,
      },
    });
  });
}

function generateText(createPage, pages) {
  pages.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: text,
      context: {
        slug: node.fields.slug,
      },
    });
  });
}

function generateNarrative(createPage, pages) {
  pages.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: narrative,
      context: {
        slug: node.fields.slug,
      },
    });
  });
}