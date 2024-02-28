//===========
//  Imports
//===========
// Imports component(s).
import Form from '../Form/Form';
// Imports function from openInNewTab.js (for onClick).
import openInNewTab from '../../utils/openInNewTab';
// Imports object from links.json (for email and gitHub links).
import Links from '../../utils/links.json';
// Imports CV file from cv-placeholder.pdf (for download).
import CV from '../../utils/cv-placeholder.pdf';

//=============
//  Functions
//=============
// Renders buttons/links and form.
function Contact() {
    return (
        <>
            <section className="container-fluid text-center mt-5 pt-5">
                <article className="row">
                    <article className="col-lg-4">
                        <article className="row justify-content-center mb-3">
                            <button className="btn ms-3 px-3"
                                role="link"
                                onClick={() => openInNewTab(Links.email)}>
                                <img className="icon-img"
                                    src="./images/envelope-at.svg"
                                    alt="Envelope icon with an at symbol inside" />
                            </button>
                        </article>
                        <article className="row justify-content-center mb-3">
                            <button className="btn ms-3 px-3"
                                role="link"
                                onClick={() => openInNewTab(Links.gitHub)}>
                                <img className="icon-img"
                                    src="./images/github.svg"
                                    alt="GitHub icon" />
                            </button>
                        </article>
                        <article className="row justify-content-center mb-3">
                            <a className="btn ms-3 px-3"
                                href={CV}
                                download="placeholder-cv"
                                target="_blank"
                                rel="noreferrer">
                                <img className="icon-img"
                                    src="./images/file-person.svg"
                                    alt="CV icon" />
                            </a>
                        </article>
                    </article>
                    <Form />
                </article>
            </section>
        </>
    )
};

// Exports Contact component.
export default Contact;