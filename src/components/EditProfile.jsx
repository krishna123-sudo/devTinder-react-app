import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import Loader from '../Loader';

function EditProfile({ userData }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [about, setAbout] = useState("");

    // Update form when userData arrives
    useEffect(() => {
        if (userData) {
            setFirstName(userData.firstName || "");
            setLastName(userData.lastName || "");
            setAbout(userData.about || "");
        }
    }, [userData]);

    if (!userData) return <Loader />;

    const profileUpdate = async () => {
        try {
            const res = await axios.patch(
                BASE_URL + "/profile/edit",
                { firstName, lastName, about },
                { withCredentials: true }
            );

            dispatch(addUser(res.data));
            toast.success("Profile updated successfully");
            navigate("/");

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex justify-center my-10">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-96 border p-6">
                <legend className="fieldset-legend text-lg font-semibold">
                    Edit Profile
                </legend>

                <label className="label">First Name</label>
                <input
                    type="text"
                    value={firstName}
                    className="input w-full"
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <label className="label">Last Name</label>
                <input
                    type="text"
                    value={lastName}
                    className="input w-full"
                    onChange={(e) => setLastName(e.target.value)}
                />

                <label className="label">About</label>
                <input
                    type="text"
                    value={about}
                    className="input w-full"
                    onChange={(e) => setAbout(e.target.value)}
                />

                <button
                    className="btn btn-neutral mt-4 w-full"
                    onClick={profileUpdate}
                >
                    Save User
                </button>
            </fieldset>
        </div>
    )
}

export default EditProfile;