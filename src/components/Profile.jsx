import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Hello, Welcome to the Profile Page</h1>
      <p>So... Nice Job?</p>
      <Link to='/'>OK Now return</Link>
    </div>
  );
};

export default Profile;
