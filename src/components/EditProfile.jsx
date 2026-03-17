import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { toast } from "react-toastify";
import Loader from "../Loader";

function EditProfile({ userData }) {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [about, setAbout] = useState("")
    const [photoUrl, setPhotoUrl] = useState("")
    const [loading, setLoading] = useState(false)


    useEffect(() => {

        if (userData) {
            setFirstName(userData?.data?.result?.data?.firstName || userData?.result?.data?.firstName)
            setLastName(userData?.data?.result?.data?.lastName || userData?.result?.data?.lastName)
            setAbout(userData?.data?.result?.data?.about || userData?.result?.data?.about)
            setPhotoUrl(userData?.data?.result?.data?.photoUrl || userData?.result?.data?.photoUrl)
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

            <div className="flex flex-row gap-6">

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

                    <div className="w-full max-w-sm">

                        <div className="h-full backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-2xl overflow-hidden">

                            <div className="flex justify-center px-10 pt-10">
                                <img
                                    src={
                                        photoUrl ||
                                        "https://via.placeholder.com/150"
                                    }
                                    alt="profile"
                                    className="rounded-full w-40 h-40 object-cover"
                                />
                            </div>

                            <div className="p-6 text-center text-white">

                                <h2 className="text-2xl font-bold text-pink-400">
                                    {firstName || "First Name"} {lastName || "Last Name"}
                                </h2>


                                <p className="text-gray-400 mt-2 text-sm">
                                    {about || "Write something about yourself..."}
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default EditProfile