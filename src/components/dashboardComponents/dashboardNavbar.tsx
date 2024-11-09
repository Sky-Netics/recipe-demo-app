import { useContext } from "react";
import AuthContext from "../../context/authContext";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  const authContext = useContext(AuthContext);
  console.log(authContext);

  const userData = JSON.parse(localStorage.getItem('user-data') || '{}');

  return (
    <div className="flex justify-between w-6/6 px-10 py-8">
      {authContext.isLoggedIn ? (
        <Link to={'./'}>
          <h1 className="text-[18px] font-semibold">
            Welcome {userData?.username || 'User'}
          </h1>
        </Link>
      ) : (
        <Link to={'/login'}>
          Login/Register
        </Link>
      )}
      
      <button className="border border-black text-[13px] font-semibold px-9 py-2.5 rounded-3xl">
        Logout
      </button>
    </div>
  );
};

export default DashboardNavbar;
