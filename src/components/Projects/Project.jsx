//=============
//  Functions
//=============
// Creates project cards, with props (data) from parent component (ProjectGallery). 
const Project = ({ title, aim, tech, repo, deploy, image }) => {

  // Opens external page (url) in new window. Rel prop is set to noreferrer for security purposes.
  // *CREDIT: Code adapted from Medium (2022) How to Open a Link in a New Tab in React (https://medium.com/coding-beauty/react-open-link-in-new-tab-b48fca2ce86f).
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer')
  };

  return (

    <article className="card col-lg-5 m-3">
      {/* <!--Alt tags for project images set to null as these convey no meaning (i.e. decorative).--> */}
      <img src={image} className="card-img object-fit-cover border rounded" alt="" />
      <article className="card-body">
        <h1 className="card-title">{title}</h1>
        <p className="card-text"><i> {aim}</i></p>
        <div>
          {/* Iterates over tech array (passed as prop). Inside map function, each techBadge object is accessed directly to get the url and alt properties for rendering the img tag. (“tech?.map” allows us to access properties of techBadge objects that may be null or undefined without causing error).
          Code finessed thanks to Xpert Learning Assistant’s (2024) answer to “what’s wrong with this [previous version of code pasted]”. */}
          {/* <!--Alt tags included on badges as these do convey meaning (i.e. the technologies used in the project).--> */}
          {tech?.map((techBadge, index) => (
            <img key={index} alt={techBadge.alt} src={techBadge.url} className="ms-3 mb-3" />
          ))}
        </div>
        {/* Ternary checks is deploy (from parent > project.json) is equal to "Not Applicable" and if NOT renders button.
        On both buttons, onClick event listeners open project/repos in new window. */}
        {(deploy !== "Not Applicable")
          ? <button className="btn ms-3 mt-3" role="link"
            onClick={() => openInNewTab(deploy)}>Visit Project</button>
          : null}
        <button className="btn ms-3 mt-3" role="link"
          onClick={() => openInNewTab(repo)}>Visit Repo</button>
      </article>
    </article>

  );
}

//===========
//  Exports 
//===========
// Exports Project component.
export default Project;