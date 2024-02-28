//===========
//  Imports 
//===========
// Imports useEffect hook from React.
import { useEffect } from "react";
// Imports useLocation from the React router package.
import { useLocation } from "react-router-dom";

//=============
//  Functions
//=============
// Scrolls window to the top whenever user navigates to new page.
// *CREDIT: Function copied from Saeed Rohani via Stack Overflow (2020) React-router scroll to top on every transition (https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition). Coder's understanding of the function also developed thanks to Xpert Learning Assistant’s (2024) answer to “explain this: [code below copied]”.
const ScrollToTop = () => {
    // Gets current pathname from location object.
    const { pathname } = useLocation();

    // UseEffect performs a side effect:
    useEffect(() => {
        // Scrolls the window to the top whenever the pathname changes.
        window.scrollTo(0, 0);
        // Dependency array [pathname], which means the effect will only run when the pathname changes.
    }, [pathname]);

    // Returns null (i.e. doesn't render any visible content in DOM).
    return null;
};

//===========
//  Exports 
//===========
// Exports component.
export default ScrollToTop;