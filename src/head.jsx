import React from 'react'
import uniqueId from './uniqueId'

export default class Head extends React.Component{
  static propTypes = {
    row: React.PropTypes.object.isRequired,
    hide: React.PropTypes.array,
    capitalize: React.PropTypes.bool
  }

  static defaultProps = {
    capitalize: true
  }

  headings() {
    let row = Object.assign({}, this.props.row)
    return Object.keys(row).map((name) => {
      return <th key={uniqueId(name)}>{this.props.capitalize ? this.titleize(name) : name}</th>
    })
  }

  titleize(str) {
    let words = str.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ').split(' ')

    let array = words.map((word) => {
      return `${word.charAt(0).toUpperCase()}${word.substring(1)}`
    })

    return array.join(' ').trim()
  }

  render() {
    return (
      <thead>
        <tr>
          {this.headings()}
        </tr>
      </thead>
    )
  }
}
