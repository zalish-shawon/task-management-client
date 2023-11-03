import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogout = () => {
    logOut()
    .then(res => console.log(res.user))
    .catch(error => console.log(error.message))
  }


  const navItems =
    <>
      <NavLink to={'/'}><li className="font-semibold"><a>Home</a></li></NavLink>
      <NavLink to={'/usersTasks'}><li className="font-semibold"><a>Users tasks</a></li></NavLink>
    </>

  return (
    <div className="max-w-[1200px] mx-auto bg-gray-200 mt-2">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

              {navItems}

            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Task Management</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
         
          {
            user ? <div className="dropdown dropdown-end">
            <label tabIndex={0} className="cursor-pointer flex items-center m-1 ml-3">
              <div className="avatar online">
                
                 <div className="w-12 rounded-full">
                  <img src={user?.photoURL} />
                </div>
                
              </div>
            </label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <div className="pl-5">
                <p>{user?.displayName}</p>
                 <li><button onClick={handleLogout}>Logout</button></li>
              </div>
            </ul>
          </div>
          : <Link to={'/login'}><button className="btn">Login</button></Link>

          }
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;