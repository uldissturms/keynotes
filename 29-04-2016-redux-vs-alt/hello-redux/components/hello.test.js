import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import Hello from './hello.jsx';

expect.extend(expectJSX);

const renderHello = name => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Hello name={name}/>);
  return renderer.getRenderOutput();
}

const getChildrenByClass = (element, name) => {
  return element.props.children.filter((value) => {
    return value.props && value.props.className === name;
  })[0];
}

describe('hello component', () => {
  it('renders name', () => {
    const output = renderHello('Steve');
    const name = getChildrenByClass(output, 'test-name');
    expect(name.props.children).toEqual('Steve');
  });
  it('renders component', () => {
    const output = renderHello('Steve');
    const expected = <div className="test-hello">Hello, <b className="test-name">Steve</b></div>;
    expect(output).toEqualJSX(expected);
  });
});
