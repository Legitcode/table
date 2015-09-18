import React from 'react'
import Head from './head'
import Rows from './rows'

export default class Table extends React.Component{
  static propTypes = {
    rows: React.PropTypes.array.isRequired,
    capitalize: React.PropTypes.bool,
    modify: React.PropTypes.object

  }

  render() {
    if (this.props.rows.length === 0) return null;

    let {
      rows,
      capitalize,
      modify,
      ...attributes
    } = this.props;

    return (
      <table {...attributes}>
        <Head row={rows[0]} capitalize={capitalize} />
        <Rows rows={rows} modify={modify || {}}/>
      </table>
    )
  }
}
