import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext'

const Authenticated = () => {
  const { authUser } = useContext(UserContext);
  return (
    <div className="bounds">
      <div className="grid-100">
        <h1>Successful! {authUser.name} has been authenticated.</h1>
        <p>Your username is <strong>{authUser.username}</strong>.</p>
        <p>Head over to
           <strong>
             <Link className="white" to="/settings"> Settings </Link>
           </strong>
        to change the theme.</p>
      </div>
    </div>
  );
}

export default Authenticated;
