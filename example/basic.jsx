import React from 'react';
import { Table } from '../src/index';

var rows = [
  {
    id: 1,
    name: 'Zach',
    job: 'coding'
  },
  {
    id: 2,
    name: 'Jed',
    job: 'Being a boss'
  }
];

export default class Basic extends React.Component {

  render() {
    return (
      <Table className="table table-bordered" skipId={true} rows={rows} />
    );
  }
}

React.render(<Basic />, document.getElementById('react'));
