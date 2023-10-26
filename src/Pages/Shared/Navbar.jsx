import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { HiOutlineShoppingBag, HiOutlineSearch } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  

  const handdleLogout = ()=>{
    logOut()
    .then()
    .catch()
  }

  const navItems = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/service'>Services</NavLink></li>
    <li><NavLink to='/cartdetails'>My Cart</NavLink></li>
    <li><NavLink to='/contact'>Contact</NavLink></li>
  </>
  return (
    <div className="lg:fixed lg:w-full z-50 lg:px-[7%]">
      <div className="navbar bg-base-100 h-24 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl"><img className="w-[3rem] lg:w-[5rem]" src={logo} alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end flex ml-12 lg:ml-0 items-center gap-3 text-lg">
          <HiOutlineShoppingBag />
          <HiOutlineSearch />
         {
          user ?  <Link to='/login'><button onClick={handdleLogout} className="btn btn-outline text-[#FF3811] text-lg font-medium border-[#FF3811] capitalize">Logout</button></Link>
          :
          <Link to='/login'><button className="btn btn-outline text-[#FF3811] text-lg font-medium border-[#FF3811] capitalize">Login</button></Link>
         }
        </div>
      </div>
    </div>
  );
};

export default Navbar;