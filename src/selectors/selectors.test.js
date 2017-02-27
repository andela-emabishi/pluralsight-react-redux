import expect from 'expect';
import {authorsFormattedForDropDown} from './selectors';

// return {
//   value: author.id,
//   text: author.firstName + ' ' + author.lastName
// };

describe('Test author selectors', () => {
  describe('Authors formatted for dropdown', () => {
    it('should return author data formatted for use in a dropdown correctly', () => {
      const authors = [
        {id: 'mabishi-elizabeth', firstName: 'Mabishi', lastName: 'Elizabeth'},
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'}
      ];

      const expectedAuthorData = [
        {value: 'mabishi-elizabeth', text: 'Mabishi Elizabeth'},
        {value: 'cory-house', text: 'Cory House'}
      ];

      expect(authorsFormattedForDropDown(authors)).toEqual(expectedAuthorData);
    });
  });
});
