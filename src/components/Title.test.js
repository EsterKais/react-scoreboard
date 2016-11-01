import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Title from './Title'
// last is the component we are testing

chai.use(chaiEnzyme())
// react (from facebook) test framework (from airbnb)

const title = shallow(<Title label="Scoreboard" />)

describe('<Title />', () => {
  it('has a wrapping h1 tag', () => {
    expect(title).to.have.tagName('h1')
  })

  it('renders the label text', () => {
    expect(title).to.have.text('Scoreboard')
  })

  context('with another label property set', () => {
    const title = shallow(<Title label="Reusable Components FTW" />)

    it('renders that label text', () => {
      expect(title).to.have.text('Reusable Components FTW')
    })
  })
})
