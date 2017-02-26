import expect from 'expect'; //assertion library to be used in conjunction with Mocha
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

// Helpful to write function that will render the component under test

function setup(saving) {
  let props = {
    course: {}, saving: saving, allAuthors: [], errors: {}, onChange: () => {}, onSave: () => {}
  };
  let renderer = TestUtils.createRenderer();
  // Should render the component to be tested
  renderer.render(<CourseForm {...props} />);
  let output = renderer.getRenderOutput();
  return {props, output, renderer};
}

describe('Test CourseForm via React TestUtils', () => {
  it('renders a form at the top level', () => {
    const { output } = setup();
    expect(output.type).toBe('form');
  });
  it('renders a h1 under the form', () => {
    const { output } = setup();
    // console.log(output.props);
    // First element of props.children array should be a h1
    // Take the firstElement of the output.props.children array
    // and give it a variable name of firstElement
    // same as saying const firstElement = output.props.children[0]
    // const firstElement = output.props.children[0];
    const [firstElement] = output.props.children;
    expect(firstElement.type).toBe('h1');
  });

  it('Save button is labelled save when not saving', () => {
    const {output} = setup(false);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('Save');
  });

  it('Save button is labelled Saving... when Saving', () => {
    const {output} = setup(true);
    // console.log(output.props.children[5].props);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('Saving...');
  });
});
