import { Link } from "react-router-dom";

const ErrorPage = () =>{
  return(
    <div>
      <h2>{`Whoops This Route doesn't Exist`}</h2>
      <p><Link to='/'> Return to Home Page</Link></p>
    </div>
  );
};

export default ErrorPage;
