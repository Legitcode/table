import Test from 'legit-tests';
import Table from '../src/table';
import Head from '../src/head';
import Rows from '../src/rows';
import { expect } from 'chai';

/* globals describe, it */

describe('Table component', () => {
  var table = new Table({ rows: [] });

  describe('#render', () => {
    it('should not render the component if the rows are empty', () => {
      Test(<Table rows={[]}/>, {shallow: true})
      .test(({instance}) => {
        expect(instance).to.be.null;
      })
    });

    it('should render the header and rows if the rows are not empty', () => {
      let rows = [{foo: "1"}]

      Test(<Table rows={rows}/>, {shallow: true})
      .test(({instance}) => {
        let head = instance.props.children[0],
          tableRows = instance.props.children[1];

        expect(head.props).to.not.be.undefined;
        expect(tableRows.props).to.not.be.undefined;
        expect(head.props.row).to.equal(rows[0]);
        expect(tableRows.props.rows).to.equal(rows);
      })
    });

    it('should correctly modify row', () => {
      let modify = ({value}) => {
        return `Name: ${value}`
      }

      Test(<Table rows={[{name: 'zach'}]} modify={{name: modify}}/>)
      .find('td')
      .test(({helpers}) => {
        expect(helpers.elements.td.props.children).to.be.equal('Name: zach')
      })
    })

    it('should correctly modify all rows', () => {
      let modify = ({value}) => {
        return `yo ${value}`
      }

      Test(<Table rows={[{name: 'zach', job: 'awesome'}]} modifyAll={modify}/>)
      .find('td')
      .test(({td}) => {
        expect(td[0].props.children).to.be.equal('yo zach')
        expect(td[1].props.children).to.be.equal('yo awesome')
      })
    })

    it('should modify all rows and ignore individual modify ', () => {
      let modify = ({value}) => {
        return `yo ${value}`
      }

      let modifyName = ({value}) => {
        return `Name: ${value}`
      }

      Test(<Table rows={[{name: 'zach', job: 'awesome'}]} modifyAll={modify} modify={{name: modifyName}}/>)
      .find('td')
      .test(({td}) => {
        expect(td[0].props.children).to.be.equal('yo zach')
        expect(td[1].props.children).to.be.equal('yo awesome')
      })
    })

    it('should hide id row', () => {
      let modify = ({hidden}) => {
          expect(hidden.id).to.be.equal(1)
      }
      Test(<Table rows={[{id: 1, name: 'zach'}]} hide={['id']}/>)
      .find('td')
      .element(td => {
        expect(td.props.children).to.be.equal('zach');
      })
    });

  });
});
