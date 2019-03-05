import React from 'react'
import { graphql } from 'gatsby';

import Layout from '../components/layout'
import SEO from '../components/seo'
import Digest from '../components/digest'

export default ({ data }) => {
  const {
    markdownRemark: {
      html,
      excerpt,
      tableOfContents,
      frontmatter: {
        title,
        toc,
      },
    },
  } = data

  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt} />
      <h2 dangerouslySetInnerHTML={{ __html: title}} />
      { toc && <Digest items={tableOfContents} /> }
      <p dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug } } ) {
      html
      excerpt
      tableOfContents(pathToSlugField: "fields.slug")
      frontmatter {
        title
        type
        toc
      }
    }
  }
`;