import React from 'react'

export default class Rows extends React.Component{

  static propTypes = {
    rows: React.PropTypes.array
  }

  rows(){
    let rows = [];

    for(let row of this.props.rows){
      let rowList = [];

      for(let item in row){
        console.log(item);
        if (!(this.props.skipId && item === "id")) {
          rowList.push(<td key={`${row.id}-${row[item]}`}>{row[item]}</td>)
        }
      }

      rows.push(<tr key={`row-${row.id}`}>{rowList}</tr>)
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
