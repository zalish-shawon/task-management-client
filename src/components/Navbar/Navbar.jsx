import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navItems = 
     <>
      <NavLink to={'/'}><li className="font-semibold"><a>Home</a></li></NavLink>
      <NavLink to={'/usersTasks'}><li className="font-semibold"><a>Users tasks</a></li></NavLink>
      <NavLink to={'/addTask'}><li className="font-semibold"><a>Add Task</a></li></NavLink>
     </>
   

    

    return (
        <div className="navbar bg-base-100">
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
          <button className="btn">Login</button>
        </div>
      </div>
    );
};

export default Navbar;