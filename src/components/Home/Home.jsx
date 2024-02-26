//===========
//  Imports 
//===========
// Imports components.
import Profile from '../Profile/Profile';
import SkillsGallery from '../Skills/SkillsGallery';

//=============
//  Functions
//=============
// Renders Profile and SkillsGallery.
const Home = () => {
    return (
        <>
            <Profile />
            <SkillsGallery />
        </>
    )
};

//===========
//  Exports 
//===========
// Exports Home component.
export default Home;