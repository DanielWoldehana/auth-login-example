import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  console.log(user);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div>
      <span>Hello {user?.email}</span>
      <Link to={!user && "/login"}>
        <button onClick={handleAuthentication}>
          {user ? "Sign Out" : "Sign In"}
        </button>
      </Link>
    </div>
  );
};

export default Header;
