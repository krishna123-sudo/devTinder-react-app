// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { BASE_URL } from "../utils/constants";
// import { toast } from "react-toastify";

// function UserCard({ userfeed, fetchFeed }) {
//     // console.log(userfeed);
//     const [index, setIndex] = useState(0);
//     const [loading, setLoading] = useState(false);

//     const apiIntrestedIgnore = async (status, reqId) => {
//         try {
//             setLoading(true);
//             const res = await axios.post(BASE_URL + `/request/send/${status}/${reqId}`, {}, {
//                 withCredentials: true
//             })
//             toast.success(`Rquest ${status}`)
//             const nextIndex = index + 1;
//             if (nextIndex >= userfeed.length) {
//                 fetchFeed();
//                 setIndex(0)
//             } else {
//                 setIndex(nextIndex);
//             }
//         } catch (err) {
//             consoler.log(err)
//         } finally {
//             setLoading(false);
//         }
//     }

//     const user = userfeed[index]

//     return (
//         <div className="card bg-base-300 w-80 shadow-sm">

//             <figure className="px-10 pt-10">
//                 <img
//                     src={user?.photoUrl}
//                     alt="profile"
//                     className="rounded-xl"
//                 />
//             </figure>

//             <div className="card-body items-center text-center">

//                 <h2 className="card-title">
//                     {user?.firstName} {user?.lastName}
//                 </h2>

//                 <p>{user?.skills?.join(", ")}</p>

//                 <p>{user?.about}</p>

//                 <div className="card-actions">

//                     <button
//                         className="btn btn-error"
//                         onClick={() => apiIntrestedIgnore("ignore", user._id)}
//                         disabled={loading}
//                     >
//                         {loading ? (
//                             <span className="spinner-border spinner-border-sm"></span>

//                         ) : (
//                             "Ignore"
//                         )}
//                     </button>

//                     <button
//                         className="btn btn-success"
//                         onClick={() => apiIntrestedIgnore("intrested", user._id)}
//                         disabled={loading}

//                     >
//                         {loading ? (
//                             <span className="spinner-border spinner-border-sm"></span>
//                         ) : (
//                             "Interested"
//                         )}
//                     </button>

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default UserCard;

import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../utils/constants";
import { toast } from "react-toastify";

function UserCard({ userfeed, fetchFeed }) {

    const feedData = userfeed.result.data;

    const [index, setIndex] = useState(0)
    const [loading, setLoading] = useState(false)

    const apiIntrestedIgnore = async (status, reqId) => {

        try {

            setLoading(true)

            await axios.post(
                BASE_URL + `/request/send/${status}/${reqId}`,
                {},
                { withCredentials: true }
            )

            toast.success(`Request ${status}`)

            const nextIndex = index + 1

            if (nextIndex >= userfeed.length) {
                fetchFeed()
                setIndex(0)
            } else {
                setIndex(nextIndex)
            }

        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }

    }

    const user = feedData[index]

    return (

        <div className="w-full max-w-sm">

            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-2xl overflow-hidden">

                <div className=" overflow-hidden">
                    <figure className="flex justify-center px-10 pt-10">
//                 <img
                            src={user?.photoUrl}
                            alt="profile"
                            className="rounded-full w-full"
                        />
                    </figure>
                </div>

                <div className="p-6 text-center text-white">

                    <h2 className="text-2xl font-bold text-pink-400">
                        {user?.firstName} {user?.lastName}
                    </h2>

                    <p className="text-gray-300 mt-2">
                        {user?.skills?.join(", ")}
                    </p>

                    <p className="text-gray-400 mt-2 text-sm">
                        {user?.about}
                    </p>

                    <div className="flex justify-center gap-6 mt-6">

                        <button
                            className="btn btn-circle btn-error text-lg hover:scale-110 transition"
                            onClick={() => apiIntrestedIgnore("ignore", user._id)}
                            disabled={loading}
                        >
                            ❌
                        </button>

                        <button
                            className="btn btn-circle btn-success text-lg hover:scale-110 transition"
                            onClick={() => apiIntrestedIgnore("intrested", user._id)}
                            disabled={loading}
                        >
                            ❤️
                        </button>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default UserCard