module.exports = {
  siteMetadata: {
    title: `Ed.`,
    subtitle: `a gatsby theme for minimal editions`,
    description: `Ed. Gatsby is a starter for Gatsby based on the Jekyll theme for Ed`,
    keywords: `minimal editions, academic, digital humanities, gatsbyjs`,
    author: `@inadeqt_futurs`,
    theme: ``,
    url: ``,
    logo: `/content/images/ed.png`,
    sidebar: {
      description: `Ed. is a Gatsby theme designed for textual editors based on minimal computing principles, and focused on legibility and flexibility.`,
      licence: `Currently in beta. Distributed with MIT licence.`
    },
  },
  pathPrefix: `gatsby-starter-ed`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: ``,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1400,
            },
          },
          'gatsby-remark-bracketed-spans',
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-ed`,
        short_name: `ed`,
        start_url: `/`,
        background_color: `#841212`,
        theme_color: `#841212`,
        display: `minimal-ui`,
        icon: `content/images/ed.png`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
