//===========
//  Imports 
//===========
// Imports function from openInNewTab.js.
import openInNewTab from '../../utils/openInNewTab';

//=============
//  Functions
//=============
// Creates project cards, with props (data) from parent component (ProjectGallery). 
const Project = ({ title, aim, tech, repo, deploy, image }) => {
  return (
    <article className="card col-lg-5 m-3">
      {/* <!--Alt tags for project images set to null as these convey no meaning (i.e. decorative).--> */}
      <img className="project-img object-fit-cover border rounded"
        src={image}
        alt="" />
      <article className="card-body">
        <h1>{title}</h1>
        <p><i>{aim}</i></p>
        <article>
          {/* <!--Alt tags included on badges as these do convey meaning (i.e. the technologies used in the project).--> */}
          {tech?.map((techBadge, index) => (
            <img className="ms-3 mb-3" key={index} alt={techBadge.alt} src={techBadge.url} />
          ))}
        </article>
        {/* Ternary checks is deploy (from parent > project.json) is equal to "Not Applicable" and if NOT renders button.
        On both buttons, onClick event listeners open project/repos in new window. */}
        <article className="row justify-content-center">
          {(deploy !== "Not Applicable")
            ? <button className="btn ms-3 mt-3"
              role="link"
              onClick={() => openInNewTab(deploy)}>
              Visit Project</button>
            : null}
          <button className="btn ms-3 mt-3"
            role="link"
            onClick={() => openInNewTab(repo)}>
            <img className="icon-img"
              src="./images/github.svg"
              alt="GitHub icon" />
          </button>
        </article>
      </article>
    </article>
  )
};

//===========
//  Exports 
//===========
// Exports Project component.
export default Project;