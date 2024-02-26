//=============
//  Functions
//=============
// Creates dynamic skill p elements, with props (data) from parent component (Home). 
const SkillsDynamic = ({ dynamic }) => {
    return (
        <>
            {dynamic?.map((dynamicVal, index) => (
                <p className="styled-p col-lg-2 text-center"
                    key={index}>
                    {dynamicVal}</p>
            ))}
        </>
    )
};

//===========
//  Exports 
//===========
// Exports component.
export default SkillsDynamic;