// import axios from 'axios'
// import React, { useEffect } from 'react'
// import { BASE_URL } from '../utils/constants'
// import { useDispatch, useSelector } from 'react-redux'
// import { addFeed } from '../utils/FeedSlice';
// import UserCard from './UserCard';
// import Loader from '../Loader';

// function Feed() {
//     const disPatch = useDispatch();
//     const DataStore = useSelector(store => store.feed.feed)
//     // console.log(DataStore);
//     const fetchFeed = async () => {
//         try {
//             const res = await axios.get(BASE_URL + "/feed?limit=5", {
//                 withCredentials: true
//             })

//             disPatch(addFeed(res?.data));
//         } catch (err) {
//             console.log(err)
//         }
//     }

//     useEffect(() => {

//         fetchFeed();

//     }, [])

//     if (!DataStore) return (
//         <div className='flex justify-center my-20'>
//             <Loader />
//         </div>
//     )
//     if (DataStore.length === 0) {
//         return (
//             <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">

//                 <div className="bg-base-200 border border-base-300 shadow-xl rounded-2xl p-10 max-w-md">

//                     <div className="text-6xl mb-4">🚀</div>

//                     <h2 className="text-2xl font-bold text-primary">
//                         You're all caught up!
//                     </h2>

//                     <p className="text-gray-500 mt-3">
//                         No developers available right now.
//                         New profiles will appear as soon as developers join DevTinder.
//                     </p>

//                     {/* <button
//                         className="btn btn-primary mt-6"
//                         onClick={fetchFeed}
//                     >
//                         Refresh Feed
//                     </button> */}

//                 </div>

//             </div>
//         );
//     }

//     return (
//         <div className='flex justify-center my-10'>
//             <UserCard userfeed={DataStore} fetchFeed={fetchFeed} />
//         </div>
//     )
// }

// export default Feed
import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/FeedSlice";
import UserCard from "./UserCard";
import Loader from "../Loader";

function Feed() {

    const dispatch = useDispatch();
    const DataStore = useSelector((store) => store.feed.feed);

    const fetchFeed = async () => {
        try {

            const res = await axios.get(BASE_URL + "/feed?limit=5", {
                withCredentials: true
            })

            dispatch(addFeed(res?.data))

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchFeed()
    }, [])

    if (!DataStore) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900">
                <Loader />
            </div>
        )
    }

    if (DataStore.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 px-6">

                <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-10 max-w-md text-center">

                    <div className="text-6xl mb-4">🚀</div>

                    <h2 className="text-2xl font-bold text-pink-400">
                        You're all caught up!
                    </h2>

                    <p className="text-gray-300 mt-3">
                        No developers available right now.
                        New profiles will appear as soon as developers join DevTinder.
                    </p>

                </div>

            </div>
        )
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 px-4">

            <UserCard
                userfeed={DataStore}
                fetchFeed={fetchFeed}
            />

        </div>

    )

}

export default Feed