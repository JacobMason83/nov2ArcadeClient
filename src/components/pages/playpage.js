import React, { Component } from 'react'
import Navbar from "../../navigation/navbar"

export default class Playpage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gameName="",
      url="",
      description=""
    }
  }

  makeState() {
    setState({this.props.gameName})=gameName
    setState({this.props.url})=url
    setState({this.props.description})=description
  }

  componentDidMount() {
    this.makeState()
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1>{this.gameName}</h1>
        <iframe src={this.url}></iframe>
        <p>{this.description}</p>
      </div>
    )
  }
}
