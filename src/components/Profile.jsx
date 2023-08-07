import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Hello, Welcome to the Profile Page</h1>
      <p>So... Nice Job?</p>
      <p><Link to='/'>OK Now return</Link></p>
      <p><Link to='SubProfile1'>SubProfile1</Link></p>
      <p><Link to='SubProfile2'>SubProfile2</Link></p>
      <Outlet />
    </div>
  );
};

export default Profile;
