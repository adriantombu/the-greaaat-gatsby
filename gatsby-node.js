const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  await createFreelancePages(createPage, graphql)
  await createPrestationPages(createPage, graphql)
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

  for (const data of freelances.data.allMarkdownRemark.edges) {
    const freelance = await graphql(`
      {
        markdownRemark(
          frontmatter: {
            slug: {eq: "${data.node.frontmatter.slug}"}
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
      path: `freelances/${data.node.frontmatter.slug}`,
      component: freelanceTemplate,
      context: {
        data: freelance.data.markdownRemark
      }
    })
  }
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

  for (const data of prestations.data.allMarkdownRemark.edges) {
    const prestation = await graphql(`
      {
        markdownRemark(
          frontmatter: {
            slug: {eq: "${data.node.frontmatter.slug}"}
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
      path: `prestation/${data.node.frontmatter.slug}`,
      component: prestationTemplate,
      context: {
        data: prestation.data.markdownRemark
      }
    })
  }
}
