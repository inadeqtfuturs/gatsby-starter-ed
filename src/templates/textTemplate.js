import React from 'react'
import { graphql } from 'gatsby';

import Layout from '../components/layout'
import SEO from '../components/seo'

import narrative from '../components/styles/narrative'
import poem from '../components/styles/poem'

export default ({ data }, props) => {
  const { poemStyle=poem, narrativeStyle=narrative } = props;
  const {
    markdownRemark: {
      html,
      excerpt,
      frontmatter: {
        title,
        author,
        type,
      },
    },
  } = data

  let themeStyle;
  switch (type) {
    case "poem":
      themeStyle = poemStyle;
      break;
    case "narrative":
      themeStyle = narrativeStyle;
      break;
    default:
      themeStyle = narrativeStyle;
  }

  return (
    <Layout>
      <SEO 
        author={author}
        title={title} 
        description={excerpt} />
      <div className={themeStyle}>
        <h2 dangerouslySetInnerHTML={{ __html: title}} />
        {type === 'poem' && <p className={'byline'} dangerouslySetInnerHTML={{ __html: author}} />}
        {(type === 'drama' || type === 'narrative') && <p className={'citation'}> by {author}</p>}
        <p dangerouslySetInnerHTML={{ __html: html }} />
      </div>      
    </Layout>
  )
}

export const query = graphql`
  query TextQuery($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug } } ) {
      html
      excerpt
      frontmatter {
        title
        author
        type
      }
    }
  }
`;