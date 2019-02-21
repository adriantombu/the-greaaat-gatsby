const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  await createFreelancePages(createPage, graphql);
  await createPrestationPages(createPage, graphql);
}

const createFreelancePages = async (createPage, graphql) => {
  const freelanceTemplate = path.resolve(`src/templates/freelance.js`)
  const freelances = await graphql(`
    {
      allMarkdownRemark(
        sort: {
          order: ASC,
          fields: [frontmatter___slug]},
          filter: {
            fileAbsolutePath: {
              regex: "/(freelances)/.*\.md$/"
            }
          }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  freelances.data.allMarkdownRemark.edges.forEach(async ({ node }) => {
    const freelance = await graphql(`
      {
        markdownRemark(
          frontmatter: {
            slug: {eq: "${node.frontmatter.slug}"}
          }
        ) {
          html
          frontmatter {
            title
            position
            city
            website
            facebook
            twitter
            linkedin
            dribble
            github
            viadeo
            behance
            picture
            slug
            seoTitle
            seoDescription
          }
        }
      }
    `)

    createPage({
      path: `freelances/${node.frontmatter.slug}`,
      component: freelanceTemplate,
      context: {
        data: freelance.data.markdownRemark
      }
    })
  })
}

const createPrestationPages = async (createPage, graphql) => {
  const prestationTemplate = path.resolve(`src/templates/prestation.js`)
  const prestations = await graphql(`
    {
      allMarkdownRemark(
        sort: {
          order: ASC,
          fields: [frontmatter___slug]},
          filter: {
            fileAbsolutePath: {
              regex: "/(prestations)/.*\.md$/"
            }
          }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  prestations.data.allMarkdownRemark.edges.forEach(async ({ node }) => {
    const prestation = await graphql(`
      {
        markdownRemark(
          frontmatter: {
            slug: {eq: "${node.frontmatter.slug}"}
          }
        ) {
          html
          frontmatter {
            title
            slug
            freelances {
              frontmatter {
                title
                position
                city
                picture
                slug
              }
            }
          }
        }
      }
    `)

    createPage({
      path: `prestation/${node.frontmatter.slug}`,
      component: prestationTemplate,
      context: {
        data: prestation.data.markdownRemark
      }
    })
  })
}
