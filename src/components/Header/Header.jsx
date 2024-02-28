//===========
//  Imports 
//===========
// Imports Navlink from the React router package.
import { NavLink } from 'react-router-dom';
// Imports React's useRef hook.
import { useRef } from "react";

//=============
//  Functions
//=============
// Creates a header component, including a responsive navbar. 
const Header = () => {

    // *CREDIT: Below code adapted from lasjorg via freeCodeCamp Forum (2022) Closing bootstrap navbar on click of link (https://forum.freecodecamp.org/t/closing-bootstrap-navbar-on-click-of-link/499339).
    // Declares NavDropdown variable that holds reference to a DOM element (initially set to null). (The useRef hook creates a mutable object that can hold a reference to a DOM element).
    const NavDropdown = useRef(null);
    // Removes "show" class from the DOM element referenced by NavDropdown.
    const collapseNavDropdown = () => {
        // Accesses current value of the NavDropdown reference (i.e. the element below with this ref attribute); removes show class from this DOM element. 
        NavDropdown.current.classList.remove("show");
    }

    return (
        <>
            <header>
                <nav className="navbar navbar-color navbar-expand-md border-body fixed-top">
                    <section className="container-fluid">
                        <button className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <article className="collapse navbar-collapse justify-content-center"
                            id="navbarNavDropdown" ref={NavDropdown}>
                            <ul className="navbar-nav">
                                <li className="nav-item px-4">
                                    <NavLink to="/"
                                        // onClick event listener calls function, which removes show class from article (above) and hence, collapses the NavDropdown (present on small screens).
                                        onClick={collapseNavDropdown}
                                        // Sets class dynamically, using ternary: takes in isActive parameter (which is a boolean value) and if this is true, class name will be nav-link active (or nav-link if false). This allows us to set the styling based on whether the link is active or not.
                                        className={({ isActive }) =>
                                            isActive ? "nav-link active" : "nav-link"
                                        }>Home</NavLink>
                                </li>
                                <li className="nav-item px-4">
                                    <NavLink to="projects"
                                        onClick={collapseNavDropdown}
                                        className={({ isActive }) =>
                                            isActive ? 'nav-link active' : 'nav-link'
                                        }>Projects</NavLink>
                                </li>
                                <li className="nav-item px-4">
                                    <NavLink to="contact"
                                        onClick={collapseNavDropdown}
                                        className={({ isActive }) =>
                                            isActive ? 'nav-link active' : 'nav-link'
                                        } >Contact</NavLink>
                                </li>
                            </ul>
                        </article>
                    </section>
                </nav>
            </header >
        </>
    )
};

//===========
//  Exports 
//===========
// Exports Header component.
export default Header;