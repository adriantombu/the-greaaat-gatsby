import React from "react"

import Freelance from '../components/Freelance'

export default function Template({ pageContext: { data } }) {
  const { frontmatter, html } = data

  return <Freelance freelance={frontmatter} content={html} />
}
