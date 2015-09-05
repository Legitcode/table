import React from 'react'

export default class Head extends React.Component{

  static propTypes = {
    row: React.PropTypes.object
  }

  headings() {
    return Object.keys(this.props.row).map((name) => {
      if (this.props.skipId && name === "id") return;
      return <th key={name}>{name}</th>;
    });
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
