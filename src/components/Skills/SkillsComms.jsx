//=============
//  Functions
//=============
// Creates =communication skill p elements, with props (data) from parent component (Home).
const SkillsComms = ({ comms }) => {
    return (
        <>
            {comms?.map((commsVal, index) => (
                <p className="styled-p col-lg-2 text-center"
                    key={index}>
                    {commsVal}</p>
            ))}
        </>
    )
};

//===========
//  Exports 
//===========
// Exports component.
export default SkillsComms;