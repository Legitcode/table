import React from 'react'
import Head from './head'
import Rows from './rows'

export default class Table extends React.Component{
  static propTypes = {
    rows: React.PropType.array,
    capitalize: React.PropType.bool
  }

  render(){
    let { rows, capitalize, ...attributes } = this.props

    return (
      <table {...attributes}>
        <Head row={rows[0]} capitalize={capitalize} />
        <Rows rows={rows} />
      </table>
    )
  }
}
