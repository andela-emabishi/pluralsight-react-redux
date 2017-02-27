// Extracting mapStateToProps
// Select input component expects object with value and text keys
export function authorsFormattedForDropDown(authors) {
  return authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
}
