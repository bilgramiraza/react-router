import { Link, useParams } from "react-router-dom";
import SubProfile from './SubProfile.jsx';
import SubProfile1 from './SubProfile1.jsx';
import SubProfile2 from './SubProfile2.jsx';

const Profile = () => {
  const subComponents = {
    undefined:<SubProfile />,
    '1':<SubProfile1 />,
    '2':<SubProfile2 />,
  };
  const {compNumber} = useParams();
  console.log(compNumber);
  return (
    <div>
      <h1>Hello, Welcome to the Profile Page</h1>
      <p>So... Nice Job?</p>
      <p><Link to='/'>OK Now return</Link></p>
      <p><Link to='/profile/'>DefaultSubProfile</Link></p>
      <p><Link to='/profile/1'>SubProfile1</Link></p>
      <p><Link to='/profile/2'>SubProfile2</Link></p>
      {subComponents[compNumber]}
    </div>
  );
};

export default Profile;
