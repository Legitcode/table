import {
  React,
  expect,
  TestUtils,
  createComponent,
  createShallowComponent
} from './test_helper';

import Table from '../src/table';
import Head from '../src/head';
import Rows from '../src/rows';

/* globals describe, it */

describe('Table component', () => {
  var table = new Table({ rows: [] });

  describe('#render', () => {
    it('should not render the header or rows if the rows are empty', () => {
      let table = createShallowComponent(Table, { rows: [] });

      expect(table.props.children[0]).to.be.undefined;
      expect(table.props.children[1]).to.be.undefined;
    });

    it('should render the header and rows if the rows are not empty', () => {
      let rows = [{foo: "1"}],
          table = createShallowComponent(Table, { rows: rows });

      let head = table.props.children[0],
          tableRows = table.props.children[1];

      expect(head.props).to.not.be.undefined;
      expect(tableRows.props).to.not.be.undefined;
      expect(head.props.row).to.equal(rows[0]);
      expect(tableRows.props.rows).to.equal(rows);
    });
  });
});
