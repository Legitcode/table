import React from 'react'

export default class Head extends React.Component{

  static propTypes = {
    row: React.PropTypes.object
  }

  headings(){
    let headings = []
    for(let name in this.props.row){
      headings.push(<th key={name}>{name}</th>)
    }
    return headings
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
