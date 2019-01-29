import React from "react"
import { graphql } from 'gatsby'
import shuffle from '@adriantombu/array-shuffle'

import Page from '../components/Page'
import NavFreelance from '../components/NavFreelance'
import FreelancePreview from "../components/FreelancePreview";

export default function Template({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark
  const freelances = shuffle(frontmatter.freelances);

  return (
    <Page bodyClass="freelances" title={frontmatter.title}>

      <NavFreelance current={frontmatter.slug} />

      <div className="wrapper">
        <div className="pod-head">
          <h1 className="pod-head__title">{frontmatter.title}</h1>

          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>

      <div className="freelance-box">
          <div className="wrapper">
            { freelances.map(({ frontmatter }) => (
              <FreelancePreview data={frontmatter} key={frontmatter.slug} />
            ))}
          </div>
        </div>

    </Page>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(
      frontmatter: {
        slug: { eq: $slug }
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
`
