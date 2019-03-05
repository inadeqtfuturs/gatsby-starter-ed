import React from 'react';
import { Link } from 'gatsby';
import { graphql, StaticQuery } from 'gatsby';

import style from './styles/menu';

export default (props) => (
  <StaticQuery
    query={graphql`
      query MenuQuery {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "page" } } },
          sort: {fields: [frontmatter___menuItem], order: ASC},
        ) {
          edges {
            node {
              frontmatter {
                menuTitle
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => {
      const items = data.allMarkdownRemark.edges
      const { themeStyle=style } = props;
      return (
        <nav className={themeStyle}>
          {items.map(({node}) => {
            const { frontmatter: { menuTitle }, fields:{ slug }, } = node;
            
            return (
              <Link 
                to={slug}
                activeClassName={'active'}
                key={menuTitle}>
                {menuTitle}
              </Link>
            )
          })}
        </nav>
      );
    }}
  />
)