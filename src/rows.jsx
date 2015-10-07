import React from 'react'
import uniqueId from './uniqueId'

export default class Rows extends React.Component{

  static propTypes = {
    rows: React.PropTypes.array,
    modify: React.PropTypes.object,
    hide: React.PropTypes.array,
    modifyAll: React.PropTypes.func
  }

  rows(){
    let rows = [];

    for(let row of this.props.rows){
      let rowList = []
      let id = row[Object.keys(row)[0]]

      for(let item in row){
        let value = row[item]
        let params = {
          value: row[item],
          key: item,
          row
        }
        if(this.props.modifyAll) value = this.props.modifyAll(params)
        else if(this.props.modify[item]) value = this.props.modify[item](params)

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
