import React from 'react'
import uniqueId from './uniqueId'

export default class Rows extends React.Component{

  static propTypes = {
    rows: React.PropTypes.array,
    modify: React.PropTypes.object,
    modifyAll: React.PropTypes.func
  }

  rows(){
    let rows = [];

    for(let row of this.props.rows){
      let rowList = [];
      let id = row[Object.keys(row)[0]]

      for(let item in row){
        let value = row[item]
        if(this.props.modifyAll) value = this.props.modifyAll(row[item], row)
        else if(this.props.modify[item]) value = this.props.modify[item](row[item], row)

        rowList.push(<td key={uniqueId(row[item])}>{value}</td>)
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
