module.exports = {
  siteMetadata: {
    title: ' - Réseau de freelances',
    siteUrl: 'http://greaaat.com/',
    description: 'Greaaat, le réseau de freelances spécialisés dans les métiers du web en qui vous pouvez avoir confiance',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'prestations',
        path: `${__dirname}/src/data/prestations`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'freelances',
        path: `${__dirname}/src/data/freelances`
      }
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/freelances": [ "Cache-Control: no-cache" ],
          "/prestation/*": [ "Cache-Control: no-cache" ],
        },
      },
    },
  ],
  mapping: {
    "MarkdownRemark.frontmatter.freelances": `MarkdownRemark.frontmatter.title`,
  },
}
