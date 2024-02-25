//===========
//  Imports 
//===========
// Imports components.
import SkillsTech from '../Skills/SkillsTech';
import SkillsDynamic from '../Skills/SkillsDynamic';
import SkillsComms from '../Skills/SkillsComms';
// Imports array from projects.json.
import skillData from '../../utils/skills.json';

//=============
//  Functions
//=============
// Renders skills components, passing props (data) to child components.
const SkillsGallery = () => {

    return (
        <>
            <section className="container-fluid text-center mt-4 p-5">
                <article className="row justify-content-center g-0">
                    <article className="col-lg-12 m-3">
                        <h1>Skills</h1>
                    </article>
                    <article className="col-lg-12 mb-3">
                        <img src="./images/laptop.svg" alt="Laptop icon to indicate Technical Skills" className="skills-img"></img>
                    </article>
                    <article className="col-lg-8">
                        {skillData.map((skill) => (
                            <SkillsTech
                                key={skill.id}
                                tech={skill.tech}
                            />
                        ))}
                    </article>
                    <article className="col-lg-12 m-3">
                        <img src="./images/lightbulb.svg" alt="Lightbulb icon to indicate Dynamic Skills"
                            className="skills-img" />
                    </article>
                    {skillData.map((skill) => (
                        <SkillsDynamic
                            key={skill.id}
                            dynamic={skill.dynamic}
                        />
                    ))}
                    <article className="col-lg-12 m-3">
                        <img src="./images/chat.svg" alt="Speech bubble icon to indicate Communications Skills"
                            className="skills-img" />
                    </article>
                    {skillData.map((skill) => (
                        <SkillsComms
                            key={skill.id}
                            comms={skill.communication}
                        />
                    ))}
                </article>
            </section>
        </>
    )
}

//===========
//  Exports 
//===========
// Exports Home component.
export default SkillsGallery;