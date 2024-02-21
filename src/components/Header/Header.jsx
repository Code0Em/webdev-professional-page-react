import { NavLink } from 'react-router-dom';

function Header() {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md border-bottom border-body fixed-top">
                    <section className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <article className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item px-4">
                                    <NavLink to="/" className="nav-link active">Home</NavLink>
                                </li>
                                <li className="nav-item px-4">
                                    <NavLink to="projects" className="nav-link active">Projects</NavLink>
                                </li>
                                <li className="nav-item px-4">
                                    <NavLink to="contact" className="nav-link active">Contact</NavLink>
                                </li>
                            </ul>
                        </article>
                    </section>
                </nav>
            </header>
        </>
    )
}

export default Header