import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import { useNavigate } from "react-router-dom";

function Connections() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const connectionData = useSelector((store) => store.connections.connections);

    const chatapi = (user) => {
        navigate(`/chat/${user._id}`, {
            state: {
                firstName: user.firstName,
                lastName: user.lastName,
                photoUrl: user.photoUrl
            }
        });
    };

    const fetchConnections = async () => {

        try {

            const res = await axios.get(
                BASE_URL + "/user/connection",
                { withCredentials: true }
            )

            console.log(res)

            dispatch(addConnections(res?.data?.result?.data))

        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        fetchConnections()
    }, [])

    if (!connectionData) return null;

    return (

        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 px-4 py-10">

            <h1 className="text-center text-3xl font-bold text-pink-400 mb-10">
                My Connections
            </h1>

            <div className="flex justify-center flex-wrap gap-6">

                {connectionData.length === 0 ? (

                    <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-10 text-center max-w-md">

                        <div className="text-6xl mb-4">🤝</div>

                        <h2 className="text-xl text-white font-semibold">
                            No Connections Yet
                        </h2>

                        <p className="text-gray-300 mt-2">
                            Start connecting with developers and build your network on DevTinder.
                        </p>

                    </div>

                ) : (

                    connectionData.map((user) => (

                        <div
                            key={user._id}
                            className="w-full max-w-sm backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl overflow-hidden"
                        >

                            <div className="flex flex-col items-center p-6 text-center text-white">

                                <img
                                    src={user?.photoUrl}
                                    alt="profile"
                                    className="w-24 h-24 rounded-full object-cover border-2 border-pink-400"
                                />

                                <h2 className="text-xl font-bold mt-3 text-pink-400">
                                    {user?.firstName} {user?.lastName}
                                </h2>

                                {/* skills */}

                                <div className="flex flex-wrap justify-center gap-2 mt-2">

                                    {user?.skills?.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="badge badge-outline border-pink-400 text-pink-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}

                                </div>

                                <p className="text-gray-400 text-sm mt-3">
                                    {user?.about}
                                </p>

                                <div className="mt-5">

                                    <button className="btn btn-primary btn-sm"
                                        onClick={() => chatapi(user)}
                                    >
                                        Message
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))

                )}

            </div>

        </div>

    )

}

export default Connections