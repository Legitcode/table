import React from 'react'

export default class Head extends React.Component{
  static propTypes = {
    row: React.PropTypes.object,
    capitalize: React.PropTypes.bool
  }

  static defaultProps = {
    capitalize: true
  }

  headings() {
    return Object.keys(this.props.row).map((name) => {
      return <th key={name}>{this.props.capitalize ? this.capitalize(name) : name}</th>;
    });
  }

  capitalize(str) {
    return `${str.charAt(0).toUpperCase()}${str.substring(1)}`
  }

  render(){
    return (
      <thead>
        <tr>
          {this.headings()}
        </tr>
      </thead>
    )
  }
}
