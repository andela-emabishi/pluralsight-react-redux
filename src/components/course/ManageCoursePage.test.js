// Testing Redux connected component
//  -- We can test markup and behaviour
// -----i.e. whether a h1 is rendering or whether the correct outcome occurs when a button is clicked or a form filled
// All connected components passed to function call to connect
// i.e. connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
// First way to test is to wrap all test components created by enzyme in the provider component and pass the store into them
// Redux test components via enzyme need to be also wrapped in overarching provider component

// Second way is to export the component under test using a named import - prefix real component using export class ManageCoursePage ...


import React from 'react';
// import {Provider} from 'react-redux'; //High level component that attaches the store to the react container components
import expect from 'expect';
// shallow allows us to render simgle components without their children onto the js dom virtual dom
// mount allows us to render components and all their children onto the js dom virtual dom
import {mount, shallow} from 'enzyme';
// import ManageCoursePage from './ManageCoursePage';
import {ManageCoursePage} from './ManageCoursePage';

describe('Manage Course Page', () => {
  it('sets error message when trying to save course with empty title', () => {
    // Using mount, enzyme should render component and all its children components
    // const wrapper = mount(<Provider store={store}><ManageCoursePage/></Provider>);
    // mapStateToProps function was taking care of passing authors state into component as props
    // Now that we're dealing with the raw component here, we need to pass it an authors array
    const props = {
      course: {
          id: '',
          watchHref: '',
          title: '',
          authorId: '',
          length: '',
          category: ''
        },
        authors: [],
        // Actions were handled by mapDispatchToProps through the bindActionCreators
        //  but since we're dealing with a raw component
        // we have to deal with actions on out own. The saveCourse action triggers the saveCourse method
        // in the API that returns a promise. Hence, we need to resolve it
        actions: { saveCourse: () => { return Promise.resolve(); }}
    };
    const wrapper = mount(<ManageCoursePage {...props}/>);
    // Find save button, last input on the page
    const saveButton = wrapper.find('input').last();
    // Save button should have type of submit
    expect(saveButton.prop('type')).toBe('submit');
    // Simulate save on click of save button
    // Make sure to pass in course as prop to be saved
    saveButton.simulate('click');
    // console.log(wrapper.state())
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');

  });
});
