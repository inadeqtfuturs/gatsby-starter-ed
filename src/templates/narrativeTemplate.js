import React from 'react'
import { graphql } from 'gatsby';

import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ data }) => {
  const {
    markdownRemark: {
      html,
      excerpt,
      tableOfContents,
      frontmatter: {
        title,
        author
      },
    },
  } = data

  return (
    <Layout 
      chapters={tableOfContents}
      title={title}>
      <SEO 
        author={author}
        title={title}
        description={excerpt} />
      <h2 
        id={'#title'}
        dangerouslySetInnerHTML={{ __html: title}} />
      <p className={'citation'}> by {author}</p>
      <p dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const query = graphql`
  query NarrativeQuery($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug } } ) {
      html
      excerpt
      tableOfContents(pathToSlugField: "fields.slug")
      frontmatter {
        title
        author
      }
    }
  }
`;