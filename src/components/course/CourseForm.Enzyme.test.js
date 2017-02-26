import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving) {
  let props = {
    course: {}, saving: saving, allAuthors: [], errors: {}, onChange: () => {}, onSave: () => {}
  };
  // Call shallow and pass it the component we'd like to render
  // i.e.. shallow render the CourseForm with props
  return shallow(<CourseForm {...props}/>);
}

describe('Enzyme CourseForm tests', () => {
  it('Renders a form as the parent ', () => {
    const wrapper = setup(false);
    // console.log(wrapper.find('form').length);
    expect(wrapper.find('form').length).toBe(1);
  });

  it('Renders a h1 after the form', () => {
    const wrapper = setup(false);
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  });

  it('save button is named Save when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('save button is named Saving.. when saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
});
