  // Opens external page (url) in new window. Rel prop is set to noreferrer for security purposes.
  // *CREDIT: Code adapted from Medium (2022) How to Open a Link in a New Tab in React (https://medium.com/coding-beauty/react-open-link-in-new-tab-b48fca2ce86f).
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer')
  };

//===========
//  Exports 
//===========
// Exports component.
export default openInNewTab;