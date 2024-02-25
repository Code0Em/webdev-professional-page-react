//=============
//  Functions
//=============
// Creates dynamic skill p elements, with props (data) from parent component (Home). 
const SkillsDynamic = ({ dynamic }) => {
    return (
        <>
            {dynamic?.map((dynamicVal, index) => (
                <p key={index} className="skills-p col-lg-2 text-center">{dynamicVal}</p>
            ))}
        </>
    )
};

//===========
//  Exports 
//===========
// Exports component.
export default SkillsDynamic;