import { Link, NavLink } from "react-router";


const Navbar = () => {
    const links = (
        <>
            <li>
                <NavLink to={"/"} className={({ isActive }) => isActive ? "text-green-600 border border-green-500" : ""} >Home</NavLink>
            </li>
            <li>
                <NavLink to={"/listed-books"} className={({ isActive }) => isActive ? "text-green-600 border border-green-500" : ""}>Listed Books</NavLink>
            </li>
            <li>
                <NavLink to={"/page-to-reload"} className={({ isActive }) => isActive ? "text-green-600 border border-green-500" : ""}>Page to Read</NavLink>
            </li>
            <li>
                <NavLink to={"/about"} className={({ isActive }) => isActive ? "text-green-600 border border-green-500" : ""}>About</NavLink>
            </li>
        </>
    )
    return (
        <div>
            <div className="navbar bg-base-100 w-[80%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2">
                            {links}
                        </ul>
                    </div>
                    <a className="text-2xl font-bold">BookVibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-5 px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <a className="btn btn-success">Sign In</a>
                    <a className="btn btn-primary ">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;