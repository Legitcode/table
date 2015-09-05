import React from 'react'
import Head from './head'
import Rows from './rows'

export default class Table extends React.Component{
  render(){
    let attributes = Object.assign({}, this.props)
    delete attributes.rows

    return (
      <table {...attributes}>
        <Head row={this.props.rows[0]} />
        <Rows rows={this.props.rows} />
      </table>
    )
  }
}
