import React, { Component } from 'react'
import { graphql } from 'gatsby'
import shuffle from '@adriantombu/array-shuffle'

import Page from '../components/Page'
import NavFreelance from '../components/NavFreelance'
import FreelancePreview from '../components/FreelancePreview'

export default class Freelances extends Component {
  state = {
    freelances: []
  }

  componentDidMount() {
    const cleaned = this.props.data.allMarkdownRemark.edges.map(f => f.node.frontmatter)
    const freelances = shuffle(cleaned)

    this.setState({ freelances })
  }

  render () {
    return (
      <Page bodyClass="freelances" title="Les freelances">

        <NavFreelance />

        <div className="wrapper">
          <div className="pod-head">
            <h1 className="pod-head__title">Les freelances</h1>
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
