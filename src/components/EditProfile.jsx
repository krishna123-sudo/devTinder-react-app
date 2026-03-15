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

import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../Loader";
import UserCard from "./UserCard";

function EditProfile({ userData }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [about, setAbout] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [loading, setLoading] = useState(false);

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

            // navigate("/")

        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }

    }

    return (

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-10">

            {/* Edit Form */}

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-md border p-6">

                <legend className="fieldset-legend text-lg font-semibold">
                    Edit Profile
                </legend>

                <label className="label">First Name</label>
                <input
                    type="text"
                    value={firstName}
                    className="input input-bordered w-full"
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <label className="label">Last Name</label>
                <input
                    type="text"
                    value={lastName}
                    className="input input-bordered w-full"
                    onChange={(e) => setLastName(e.target.value)}
                />

                <label className="label">About</label>
                <input
                    type="text"
                    value={about}
                    className="input input-bordered w-full"
                    onChange={(e) => setAbout(e.target.value)}
                />

                <label className="label">Photo URL</label>
                <input
                    type="text"
                    value={photoUrl || ""}
                    className="input input-bordered w-full"
                    onChange={(e) => setPhotoUrl(e.target.value)}
                />

                <button
                    className="btn btn-neutral mt-4 w-full"
                    onClick={profileUpdate}
                    disabled={loading}
                >
                    {loading ? (
                        <span className="loading loading-spinner loading-sm"></span>
                    ) : (
                        "Save User"
                    )}
                </button>

            </fieldset>

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

    )

}

export default EditProfile;