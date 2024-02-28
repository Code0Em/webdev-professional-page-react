//===========
//  Imports 
//===========
// Imports function from openInNewTab.js (for onClick).
import openInNewTab from '../../utils/openInNewTab';
// Imports object from links.json (for email and gitHub links).
import Links from '../../utils/links.json';
// Imports CV file from cv-placeholder.pdf (for download).
import CV from '../../utils/cv-placeholder.pdf';

//=============
//  Functions
//=============
// Creates profile.
const Profile = () => {
    return (
        <>
            <section className="container-fluid text-center mt-5 pt-5">
                <article className="row justify-content-center">
                    {/* Heading and Profile Image */}
                    <article className="col-lg-12">
                        <h1 className="display-5">This is Code Em</h1>
                        <img src="./images/codeem-avatar.jpeg"
                            className="rounded img-fluid profile-img mt-3"
                            alt="An avatar of Code Em, in black and white, showing her head and shoulders. The character has her hair tied up in a bun on the top of her head, a small smile on her face and is wearing a turtle-neck jumper." />
                    </article>
                    <article className="row justify-content-center mt-3">
                        {/* Brand statement */}
                        <article className="col-lg-4">
                            <p className="styled-p">A junior web developer, studying hard and putting learning into action through disciplined practice.
                            </p>
                        </article>
                        <article className="row justify-content-center mt-3">
                            <article className="col-sm-8">
                                {/* Buttons */}
                                <button className="btn ms-3 px-3"
                                    role="link"
                                    onClick={() => openInNewTab(Links.email)}>
                                    <img className="icon-img"
                                        src="./images/envelope-at.svg"
                                        alt="Envelope icon with an at symbol inside" />
                                </button>
                                <button className="btn ms-3 px-3"
                                    role="link"
                                    onClick={() => openInNewTab(Links.gitHub)}>
                                    <img className="icon-img"
                                        src="./images/github.svg"
                                        alt="GitHub icon" />
                                </button>
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
                    </article>
                </article>
            </section>
        </>
    )
};

//===========
//  Exports 
//===========
// Exports component.
export default Profile;