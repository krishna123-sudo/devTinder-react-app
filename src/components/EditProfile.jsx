import axios from 'axios';
import React, { useState } from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

function EditProfile({ userData }) {
    console.log("coming data", userData.user?.data);
    const disPatch = useDispatch();
    const navigate = useNavigate();



    const [firstName, setFirstName] = useState(userData.user?.data.firstName);
    const [lastName, setLastName] = useState(userData.user?.data.lastName);
    const [about, setAbout] = useState(userData.user?.data.about);


    const profileUpdate = async () => {
        try {
            const res = await axios.patch(BASE_URL + "/profile/edit", { firstName, lastName, about }, {
                withCredentials: true
            })

            disPatch(addUser(res.data))
            toast.success("Profile updated successfully");
            navigate("/");


        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Edit Profile</legend>

                <label className="label">FirstName</label>
                <input type="text" value={firstName} className="input" placeholder="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label className="label">LastName</label>
                <input type="text" value={lastName} className="input" placeholder="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                />
                <label className="label">About</label>
                <input type="text" value={about} className="input" placeholder="about"
                    onChange={(e) => setAbout(e.target.value)}
                />

                <button
                    className="btn btn-neutral mt-4"
                    onClick={profileUpdate}
                >Save User</button>
            </fieldset>
        </div>
    )
}

export default EditProfile