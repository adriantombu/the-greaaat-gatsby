import React, { Component } from "react"
import { graphql } from 'gatsby'
import shuffle from '@adriantombu/array-shuffle'

import Page from '../components/Page'
import NavFreelance from '../components/NavFreelance'
import FreelancePreview from "../components/FreelancePreview";

export default class Template extends Component {
  state = {
    freelances: []
  }

  componentDidMount() {
    const cleaned = this.props.data.markdownRemark.frontmatter.freelances.map(f => f.frontmatter)
    const freelances = shuffle(cleaned)

    this.setState({ freelances })
  }

  render () {
    const { data: { markdownRemark : { html, frontmatter: { title, slug }}} } = this.props

    return (
      <Page bodyClass="freelances" title={title}>

        <NavFreelance current={slug} />

        <div className="wrapper">
          <div className="pod-head">
            <h1 className="pod-head__title">{title}</h1>

            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>

        <div className="freelance-box" style={{ minHeight: '350px' }}>
          <div className="wrapper">
            { this.state.freelances.map((freelance) => (
              <FreelancePreview data={freelance} key={freelance.slug} />
            ))}
          </div>
        </div>

      </Page>
    )
  }
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
