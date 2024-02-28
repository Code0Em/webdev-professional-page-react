//===========
//  Imports
//===========
// Imports function from openInNewTab.js (for onClick).
import openInNewTab from '../../utils/openInNewTab';
// Imports object from links.json (for email and gitHub links).
import Links from '../../utils/links.json';

//=============
//  Functions
//=============
// Creates footer.
const Footer = () => {
    return (
        <>
            <footer className="container-fluid text-center pt-3 mb-3">
                <section className="row justify-content-center">
                    <article className="col-lg-2">
                        <p className="footer-p mb-2 mt-2">&copy;2024 by Code Em</p>
                    </article>
                    <button className="btn"
                        role="link"
                        onClick={() => openInNewTab(Links.email)}>
                        <img className="footer-icon-img"
                            src="./images/envelope-at.svg"
                            alt="Envelope icon with an at symbol inside" />
                    </button>
                    <button className="btn ms-3"
                        role="link"
                        onClick={() => openInNewTab(Links.gitHub)}>
                        <img className="footer-icon-img"
                            src="./images/github.svg"
                            alt="GitHub icon" />
                    </button>
                </section>
            </footer>
        </>
    )
};

//===========
//  Exports
//===========
// Exports component.
export default Footer;