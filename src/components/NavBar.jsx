// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { BASE_URL } from '../utils/constants';
// import { removeUser } from '../utils/userSlice';
// import axios from 'axios';

// function NavBar() {

//     const user = useSelector((store) => store.user.user);
//     const disPatch = useDispatch();
//     const navigate = useNavigate();
//     const location = useLocation();
//     if (location.pathname === "/login" || location.pathname === "/signup") {
//         return null;
//     }

//     const handleLogout = async () => {
//         try {
//             const res = await axios.post(BASE_URL + "/logout", {}, {
//                 withCredentials: true
//             })
//             disPatch(removeUser());
//             navigate("/login")
//         } catch (err) {
//             console.log(err);
//         }
//     }

//     const name = {}

//     return (
//         <div className="navbar bg-base-200 shadow-sm">
//             <div className="flex-1">
//                 <Link to="/" className="btn btn-ghost text-xl">👨🏻‍💻DevTinder</Link>
//             </div>
//             <div className="flex gap-2">
//                 {user && (
//                     <div className='navbar'>
//                         <div className='form-control'>Welcome,{user?.data?.firstName || user?.firstName + " " + user?.data?.lastName || user?.lastName}</div>
//                         <div className="dropdown dropdown-end mx-5 flex">
//                             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//                                 <div className="w-10 rounded-full">
//                                     <img
//                                         alt="Tailwind CSS Navbar component"
//                                         src={user?.data?.photoUrl || user?.photoUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz68b1g8MSxSUqvFtuo44MvagkdFGoG7Z7DQ&s"} />
//                                 </div>
//                             </div>
//                             <ul
//                                 tabIndex="-1"
//                                 className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//                                 <li>
//                                     <Link to="/profile" className="justify-between">
//                                         Profile
//                                         <span className="badge">New</span>
//                                     </Link>
//                                 </li>
//                                 <li><Link to="/connections">Connections</Link></li>
//                                 <li><Link to="/requests">Requests</Link></li>
//                                 <li><a
//                                     onClick={handleLogout}
//                                 >
//                                     Logout
//                                 </a></li>
//                             </ul>
//                         </div>
//                     </div>

//                 )}
//             </div>
//         </div>
//     )
// }

// export default NavBar;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import axios from "axios";

function NavBar() {

    const user = useSelector((store) => store.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    if (location.pathname === "/login" || location.pathname === "/signup") {
        return null;
    }

    const handleLogout = async () => {
        try {

            await axios.post(
                BASE_URL + "/logout",
                {},
                { withCredentials: true }
            );

            dispatch(removeUser());
            navigate("/login");

        } catch (err) {
            console.log(err);
        }
    };

    const firstName = user?.data?.firstName || user?.firstName || "";
    const lastName = user?.data?.lastName || user?.lastName || "";
    const photo =
        user?.data?.photoUrl ||
        user?.photoUrl ||
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz68b1g8MSxSUqvFtuo44MvagkdFGoG7Z7DQ&s";

    return (

        <div className="navbar bg-base-200 shadow-md px-4">

            {/* logo */}

            <div className="flex-1">
                <Link
                    to="/"
                    className="text-xl font-bold text-pink-500 hover:scale-105 transition"
                >
                    👨🏻‍💻 DevTinder
                </Link>
            </div>

            {/* right side */}

            {user && (

                <div className="flex items-center gap-3">

                    {/* welcome text */}

                    <span className="hidden sm:block text-sm font-medium">
                        Welcome, {firstName} {lastName}
                    </span>

                    {/* avatar dropdown */}

                    <div className="dropdown dropdown-end">

                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >

                            <div className="w-10 rounded-full">
                                <img src={photo} alt="profile" />
                            </div>

                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >

                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>

                            <li>
                                <Link to="/connections">Connections</Link>
                            </li>

                            <li>
                                <Link to="/requests">Requests</Link>
                            </li>

                            <li>
                                <button onClick={handleLogout}>
                                    Logout
                                </button>
                            </li>

                        </ul>

                    </div>

                </div>

            )}

        </div>

    );
}

export default NavBar;