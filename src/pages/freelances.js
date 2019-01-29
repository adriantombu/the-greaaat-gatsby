import React from 'react'
import { graphql } from 'gatsby'
import shuffle from '@adriantombu/array-shuffle'

import Page from '../components/Page'
import NavFreelance from '../components/NavFreelance'
import FreelancePreview from '../components/FreelancePreview'

export default ({ data: { allMarkdownRemark: { edges }}}) => {
  const freelances = shuffle(edges)

  return (
    <Page bodyClass="freelances" title="Les freelances">

      <NavFreelance />

      <div className="wrapper">
        <div className="pod-head">
          <h1 className="pod-head__title">Les freelances</h1>
        </div>
      </div>

      <div className="freelance-box">
        <div className="wrapper">
          { freelances.map(({ node: { frontmatter }}) => (
            <FreelancePreview data={frontmatter} key={frontmatter.slug} />
          ))}
        </div>
      </div>
    </Page>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: {
        order: ASC,
        fields: [frontmatter___slug]},
        filter: {
          fileAbsolutePath: {
            regex: "/(freelances)/.*.md$/"
          }
        }
    ) {
      edges {
        node {
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
`
