import React from 'react'
import uniqueId from './uniqueId'

export default class Rows extends React.Component{

  static propTypes = {
    rows: React.PropTypes.array
  }

  rows(){
    let rows = [];

    for(let row of this.props.rows){
      let rowList = [];
      let id = row[Object.keys(row)[0]]

      for(let item in row){
        rowList.push(<td key={uniqueId(row[item])}>{row[item]}</td>)
      }

      rows.push(<tr key={uniqueId(id)}>{rowList}</tr>)
    }

    return rows;
  }

  render(){
    return (
      <tbody>
        {this.rows()}
      </tbody>
    )
  }
}
