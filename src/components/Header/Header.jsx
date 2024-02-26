//===========
//  Imports 
//===========
// Imports Navlink from the React router package.
import { NavLink } from 'react-router-dom';

//=============
//  Functions
//=============
// Creates a header component, including a responsive navbar. 
const Header = () => {

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
                            id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item px-4">
                                    {/* Sets class dynamically, using ternary: takes in isActive parameter (which is a boolean value) and if this is true, class name will be nav-link active (or nav-link if false). This allows us to set the styling based on whether the link is active or not. */}
                                    <NavLink to="/"
                                        className={({ isActive }) =>
                                            isActive ? "nav-link active" : "nav-link"
                                        }
                                    >Home</NavLink>
                                </li>
                                <li className="nav-item px-4">
                                    <NavLink to="projects"
                                        className={({ isActive }) =>
                                            isActive ? 'nav-link active' : 'nav-link'
                                        }
                                    >Projects</NavLink>
                                </li>
                                <li className="nav-item px-4">
                                    <NavLink to="contact"
                                        className={({ isActive }) =>
                                            isActive ? 'nav-link active' : 'nav-link'
                                        }
                                    >Contact</NavLink>
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