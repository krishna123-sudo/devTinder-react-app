import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import axios from "axios";

function NavBar() {

    const userData = useSelector((store) => store.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    if (location.pathname === "/login" || location.pathname === "/signup") {
        return null;
    }

    const user = userData?.result?.data || userData?.data?.result?.data;
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