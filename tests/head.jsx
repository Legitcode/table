import Test from 'legit-tests'
import Head from '../src/head'
import { expect } from 'chai'

/* globals describe, it */

describe('Head component', () => {
  describe('initialize', () => {
    it('should default capitalize to true', () => {
      Test(<Head row={{foo: 'bar'}}/>)
      .test(({instance}) => {
        expect(instance.props.capitalize).to.be.true
      })
    })

    it('should set capitalize to false if it is passed in', () => {
      Test(<Head row={{foo: 'bar'}} capitalize={false}/>)
      .test(({instance}) => {
        expect(instance.props.capitalize).to.be.false
      })
    })
  })

  describe('#headings', () => {
    var head = new Head({ row: { foo: "bar" } })

    it('should return an array of header columns', () => {
      let headings = head.headings()

      expect(headings.length).to.equal(1)
      expect(headings[0].type).to.equal('th')
      expect(headings[0].key).to.equal('3-foo')
    })
  })

  describe('#titleize', () => {
    var head = new Head()

    it('should titleize a string properly', () => {
      expect(head.titleize('foo bar')).to.equal('Foo Bar')
    })

    it('should titleize a snake case string properly', () => {
      expect(head.titleize('foo_bar')).to.equal('Foo Bar')
    })

    it('should titleize a camel cased string properly', () => {
      expect(head.titleize('fooBar')).to.equal('Foo Bar')
    })

    it('should titleize a constantized string properly', () => {
      expect(head.titleize('FooBar')).to.equal('Foo Bar')
    })
  })
})
