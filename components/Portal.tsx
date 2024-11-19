/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import ReactDOM from 'react-dom'

export default class Portal extends React.Component<{children: any, selector:string}> {
  public element: any
  componentDidMount () {
    this.element = document.querySelector(this.props.selector)
  }

  render () {
    if (this.element === undefined) {
      return null
    }

    return ReactDOM.createPortal(this.props.children, this.element)
  }
}