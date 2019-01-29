import React, { Component } from 'react'

export default class ImageRandom extends Component {
  state = {
    src: '/placeholder.png'
  }

  componentDidMount() {
    this.setState({src: `/freelances/${this.props.imageData.picture}` })
  }

  render() {
    return (
      <img
        width="140"
        height="140"
        src={this.state.src}
        className="circle freelance__thumb wp-post-image"
        alt={this.props.imageData.title}
      />
    )
  }
}
