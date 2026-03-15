// import axios from 'axios';
// import React, { useState, useEffect } from 'react'
// import { BASE_URL } from '../utils/constants';
// import { useDispatch } from 'react-redux';
// import { addUser } from '../utils/userSlice';
// import { useNavigate } from 'react-router-dom';
// import { toast } from "react-toastify";
// import Loader from '../Loader';
// import UserCard from './UserCard';

// function EditProfile({ userData }) {

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [about, setAbout] = useState("");
//     const [photoUrl, setPhotoUrl] = useState("");
//     const [loading, setLoading] = useState(false);

//     // Update form when userData arrives
//     useEffect(() => {
//         if (userData) {
//             setFirstName(userData?.firstName || "");
//             setLastName(userData?.lastName || "");
//             setAbout(userData?.about || "");
//             setPhotoUrl(userData?.photoUrl || "");
//         }
//     }, [userData]);

//     if (!userData) return <Loader />;

//     const profileUpdate = async () => {
//         try {
//             setLoading(true);
//             const res = await axios.patch(
//                 BASE_URL + "/profile/edit",
//                 { firstName, lastName, about, photoUrl },
//                 { withCredentials: true }
//             );

//             dispatch(addUser(res?.data));
//             toast.success("Profile updated successfully");
//             navigate("/");

//         } catch (err) {
//             console.log(err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="flex justify-center  h-1/2">
//             <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-80 border p-6">
//                 <legend className="fieldset-legend text-lg font-semibold">
//                     Edit Profile
//                 </legend>

//                 <label className="label">First Name</label>
//                 <input
//                     type="text"
//                     value={firstName}
//                     className="input w-full"
//                     onChange={(e) => setFirstName(e.target.value)}
//                 />

//                 <label className="label">Last Name</label>
//                 <input
//                     type="text"
//                     value={lastName}
//                     className="input w-full"
//                     onChange={(e) => setLastName(e.target.value)}
//                 />

//                 <label className="label">About</label>
//                 <input
//                     type="text"
//                     value={about}
//                     className="input w-full"
//                     onChange={(e) => setAbout(e.target.value)}
//                 />
//                 <label className="label">Photo URL</label>
//                 <input
//                     type="text"
//                     value={photoUrl || ""}
//                     className="input w-full"
//                     onChange={(e) => setPhotoUrl(e.target.value)}
//                 />
//                 <button
//                     className="btn btn-neutral mt-4 w-full"
//                     onClick={profileUpdate}
//                     disabled={loading}
//                 >
//                     {loading ? (
//                         <span className="loading loading-spinner loading-sm"></span>
//                     ) : (
//                         "Save User"
//                     )}
//                 </button>
//             </fieldset>
//             <div className='mx-7 my-7'>
//                 <UserCard userfeed={[{ firstName, lastName, about, photoUrl: photoUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz68b1g8MSxSUqvFtuo44MvagkdFGoG7Z7DQ&s" }]} />

//             </div>
//         </div>
//     )
// }

// export default EditProfile;

// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { BASE_URL } from "../utils/constants";
// import { useDispatch } from "react-redux";
// import { addUser } from "../utils/userSlice";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import Loader from "../Loader";
// import UserCard from "./UserCard";

// function EditProfile({ userData }) {

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [about, setAbout] = useState("");
//     const [photoUrl, setPhotoUrl] = useState("");
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {

//         if (userData) {
//             setFirstName(userData?.firstName || "")
//             setLastName(userData?.lastName || "")
//             setAbout(userData?.about || "")
//             setPhotoUrl(userData?.photoUrl || "")
//         }

//     }, [userData])

//     if (!userData) return <Loader />

//     const profileUpdate = async () => {

//         try {

//             setLoading(true)

//             const res = await axios.patch(
//                 BASE_URL + "/profile/edit",
//                 { firstName, lastName, about, photoUrl },
//                 { withCredentials: true }
//             )

//             dispatch(addUser(res?.data))

//             toast.success("Profile updated successfully")

//             // navigate("/")

//         } catch (err) {
//             console.log(err)
//         } finally {
//             setLoading(false)
//         }

//     }

//     return (

//         <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-10">

//             {/* Edit Form */}

//             <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-md border p-6">

//                 <legend className="fieldset-legend text-lg font-semibold">
//                     Edit Profile
//                 </legend>

//                 <label className="label">First Name</label>
//                 <input
//                     type="text"
//                     value={firstName}
//                     className="input input-bordered w-full"
//                     onChange={(e) => setFirstName(e.target.value)}
//                 />

//                 <label className="label">Last Name</label>
//                 <input
//                     type="text"
//                     value={lastName}
//                     className="input input-bordered w-full"
//                     onChange={(e) => setLastName(e.target.value)}
//                 />

//                 <label className="label">About</label>
//                 <input
//                     type="text"
//                     value={about}
//                     className="input input-bordered w-full"
//                     onChange={(e) => setAbout(e.target.value)}
//                 />

//                 <label className="label">Photo URL</label>
//                 <input
//                     type="text"
//                     value={photoUrl || ""}
//                     className="input input-bordered w-full"
//                     onChange={(e) => setPhotoUrl(e.target.value)}
//                 />

//                 <button
//                     className="btn btn-neutral mt-4 w-full"
//                     onClick={profileUpdate}
//                     disabled={loading}
//                 >
//                     {loading ? (
//                         <span className="loading loading-spinner loading-sm"></span>
//                     ) : (
//                         "Save User"
//                     )}
//                 </button>

//             </fieldset>

//             {/* Preview Card */}

//             <div className="w-full max-w-sm flex justify-center">

//                 <UserCard
//                     userfeed={[
//                         {
//                             firstName,
//                             lastName,
//                             about,
//                             photoUrl:
//                                 photoUrl ||
//                                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz68b1g8MSxSUqvFtuo44MvagkdFGoG7Z7DQ&s"
//                         }
//                     ]}
//                 />

//             </div>

//         </div>

//     )

// }

// export default EditProfile;

import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { toast } from "react-toastify";
import Loader from "../Loader";
import UserCard from "./UserCard";

function EditProfile({ userData }) {

    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [about, setAbout] = useState("")
    const [photoUrl, setPhotoUrl] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        if (userData) {
            setFirstName(userData?.firstName || "")
            setLastName(userData?.lastName || "")
            setAbout(userData?.about || "")
            setPhotoUrl(userData?.photoUrl || "")
        }

    }, [userData])

    if (!userData) return <Loader />

    const profileUpdate = async () => {

        try {

            setLoading(true)

            const res = await axios.patch(
                BASE_URL + "/profile/edit",
                { firstName, lastName, about, photoUrl },
                { withCredentials: true }
            )

            dispatch(addUser(res?.data))

            toast.success("Profile updated successfully")

        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }

    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 px-4 py-10">

            <div className="flex flex-col lg:flex-row gap-10 items-center">

                {/* Edit Form */}

                <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl w-full max-w-md p-6 text-white">

                    <h2 className="text-2xl font-bold text-pink-400 text-center mb-6">
                        Edit Profile
                    </h2>

                    <label className="label text-gray-300">First Name</label>
                    <input
                        type="text"
                        value={firstName}
                        className="input input-bordered w-full bg-black/40 text-white"
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <label className="label text-gray-300 mt-3">Last Name</label>
                    <input
                        type="text"
                        value={lastName}
                        className="input input-bordered w-full bg-black/40 text-white"
                        onChange={(e) => setLastName(e.target.value)}
                    />

                    <label className="label text-gray-300 mt-3">About</label>
                    <textarea
                        value={about}
                        rows="3"
                        className="textarea textarea-bordered w-full bg-black/40 text-white"
                        onChange={(e) => setAbout(e.target.value)}
                    />

                    <label className="label text-gray-300 mt-3">Photo URL</label>
                    <input
                        type="text"
                        value={photoUrl || ""}
                        className="input input-bordered w-full bg-black/40 text-white"
                        onChange={(e) => setPhotoUrl(e.target.value)}
                    />

                    <button
                        className="btn w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 border-none hover:scale-105 transition"
                        onClick={profileUpdate}
                        disabled={loading}
                    >
                        {loading ? (
                            <span className="loading loading-spinner loading-sm"></span>
                        ) : (
                            "Save Profile"
                        )}
                    </button>

                </div>

                {/* Preview Card */}

                <div className="w-full max-w-sm flex justify-center">

                    <UserCard
                        userfeed={[
                            {
                                firstName,
                                lastName,
                                about,
                                photoUrl:
                                    photoUrl ||
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz68b1g8MSxSUqvFtuo44MvagkdFGoG7Z7DQ&s"
                            }
                        ]}
                    />

                </div>

            </div>

        </div>

    )

}

export default EditProfile