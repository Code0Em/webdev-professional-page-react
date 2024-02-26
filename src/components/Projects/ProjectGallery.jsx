//===========
//  Imports 
//===========
// Imports Project component.
import Project from './Project';
// Imports array from projects.json.
import projectData from '../../utils/projects.json';

//=============
//  Functions
//=============
// Renders project cards, passing props (data) to child component (Project).
const ProjectGallery = () => {
    return (
        <>
            <section className="container-fluid text-center mt-5 pt-5">
                <article className="row justify-content-center g-0">
                    {projectData.map((project) => (
                        <Project
                            id={project.id}
                            key={project.id}
                            title={project.title}
                            aim={project.aim}
                            tech={project.tech}
                            repo={project.repoLink}
                            deploy={project.deployedLink}
                            image={project.screenshot}
                        />
                    ))}
                </article>
            </section>
        </>
    )
};

//===========
//  Exports 
//===========
// Exports Project Gallery component.
export default ProjectGallery;