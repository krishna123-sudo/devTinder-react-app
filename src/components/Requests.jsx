// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { BASE_URL } from '../utils/constants';
// import { useDispatch, useSelector } from 'react-redux';
// import { addRequest } from '../utils/requestsSlice';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// function Requests() {
//     const [loading, setLoading] = useState(false);
//     const requestData = useSelector(store => store.request.request);
//     let dataRequest = requestData;
//     const navigate = useNavigate();
//     const disPatch = useDispatch();
//     const fetchRequest = async () => {
//         try {
//             const res = await axios.get(BASE_URL + "/user/requests/recieved", {
//                 withCredentials: true
//             })
//             // console.log(res)
//             disPatch(addRequest(res.data.data));
//         } catch (err) {
//             console.log(err);
//         }
//     }

//     useEffect(() => {
//         fetchRequest();
//     }, [])

//     const statusChange = async (status, reqId) => {
//         try {
//             setLoading(true);
//             const res = await axios.post(BASE_URL + `/request/review/${status}/${reqId}`, {}, {
//                 withCredentials: true
//             })
//             toast.success(`request ${status} see the connections!!`)
//             // if (status == "accepted") {
//             //     navigate("/connections");
//             // } else {
//             //     navigate("/")
//             // }
//             fetchRequest()
//         } catch (err) {

//         } finally {
//             setLoading(false);
//         }
//     }


//     if (!dataRequest) return null;

//     return (
//         <div>
//             <h1 className='flex justify-center my-10 text-3xl'>My requests</h1>
//             <div className='flex justify-center my-10 gap-6 flex-wrap'>
//                 {dataRequest.length === 0 ? (
//                     <p>You have no connections yet.</p>
//                 ) : (
//                     dataRequest.map((user) => (
//                         <div key={user._id} className="card bg-base-200 shadow-sm rounded-xl">
//                             <figure>
//                                 <img className='my-2.5 rounded-full'
//                                     src={user?.fromUserId?.photoUrl}
//                                     alt="profile"
//                                 />
//                             </figure>

//                             <div className="flex justify-center card-body text-center">
//                                 <h2 className="text-2xl">
//                                     {user?.fromUserId?.firstName} {user.fromUserId?.lastName}
//                                 </h2>

//                                 <h2 className="text-xl">
//                                     {user?.fromUserId?.skills.join(",")}
//                                 </h2>

//                                 <p>{user.fromUserId.about}</p>

//                                 <div className="flex justify-center gap-2">
//                                     <button
//                                         className="btn btn-error"
//                                         onClick={() => statusChange("rejected", user._id)}
//                                     >
//                                         Rejected
//                                     </button>
//                                     <button className="btn btn-success"
//                                         onClick={() => statusChange("accepted", user._id)}
//                                     >
//                                         Accepted

//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>

//     )
// }

// export default Requests

import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestsSlice";
import { toast } from "react-toastify";

function Requests() {

    const [loading, setLoading] = useState(false)

    const requestData = useSelector((store) => store.request.request)

    const dispatch = useDispatch()

    const fetchRequest = async () => {

        try {

            const res = await axios.get(
                BASE_URL + "/user/requests/recieved",
                { withCredentials: true }
            )

            dispatch(addRequest(res.data.data))

        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        fetchRequest()
    }, [])

    const statusChange = async (status, reqId) => {

        try {

            setLoading(true)

            await axios.post(
                BASE_URL + `/request/review/${status}/${reqId}`,
                {},
                { withCredentials: true }
            )

            toast.success(`Request ${status}`)

            fetchRequest()

        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }

    }

    if (!requestData) return null

    return (

        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 px-4 py-10">

            <h1 className="text-center text-3xl font-bold text-pink-400 mb-10">
                Connection Requests
            </h1>

            <div className="flex justify-center flex-wrap gap-6">

                {requestData.length === 0 ? (

                    <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-10 text-center max-w-md">

                        <div className="text-6xl mb-4">📭</div>

                        <h2 className="text-xl text-white font-semibold">
                            No Requests Yet
                        </h2>

                        <p className="text-gray-300 mt-2">
                            When developers send you connection requests,
                            they will appear here.
                        </p>

                    </div>

                ) : (

                    requestData.map((user) => {

                        const profile = user?.fromUserId

                        return (

                            <div
                                key={user._id}
                                className="w-full max-w-sm backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl overflow-hidden"
                            >

                                <div className="flex flex-col items-center p-6 text-center text-white">

                                    <img
                                        src={profile?.photoUrl}
                                        alt="profile"
                                        className="w-24 h-24 rounded-full object-cover border-2 border-pink-400"
                                    />

                                    <h2 className="text-xl font-bold mt-3 text-pink-400">
                                        {profile?.firstName} {profile?.lastName}
                                    </h2>

                                    <p className="text-gray-300 text-sm mt-1">
                                        {profile?.skills?.join(", ")}
                                    </p>

                                    <p className="text-gray-400 text-sm mt-2">
                                        {profile?.about}
                                    </p>

                                    <div className="flex gap-4 mt-5">

                                        <button
                                            className="btn btn-error btn-sm"
                                            onClick={() => statusChange("rejected", user._id)}
                                            disabled={loading}
                                        >
                                            Reject
                                        </button>

                                        <button
                                            className="btn btn-success btn-sm"
                                            onClick={() => statusChange("accepted", user._id)}
                                            disabled={loading}
                                        >
                                            Accept
                                        </button>

                                    </div>

                                </div>

                            </div>

                        )

                    })

                )}

            </div>

        </div>

    )

}

export default Requests