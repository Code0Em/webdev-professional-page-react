//=============
//  Functions
//=============
// Creates comms skill p elements, with props (data) from parent component (Home). 
const SkillsComms = ({ comms }) => {
    return (
        <>
            {comms?.map((commsVal, index) => (
                <p key={index} className="skills-p col-lg-2 text-center">{commsVal}</p>
            ))}
        </>
    )
};

//===========
//  Exports 
//===========
// Exports component.
export default SkillsComms;