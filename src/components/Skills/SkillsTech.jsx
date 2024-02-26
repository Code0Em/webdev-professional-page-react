//=============
//  Functions
//=============
// Creates tech skills badges, with props (data) from parent component (Home). 
const SkillsTech = ({ tech }) => {
  return (
    <>
      {/* Iterates over tech array (passed as prop). Inside map function, each techBadge object is accessed directly to get the url and alt properties for rendering the img tag. (“tech?.map” allows us to access properties of techBadge objects that may be null or undefined without causing error).
        Code finessed thanks to Xpert Learning Assistant’s (2024) answer to “what’s wrong with this [previous version of code pasted]”. */}
      {tech?.map((techBadge, index) => (
        <img className="ms-3 mb-3"
          key={index}
          src={techBadge.url}
          alt={techBadge.alt} />
      ))}
    </>
  )
};

//===========
//  Exports 
//===========
// Exports component.
export default SkillsTech;