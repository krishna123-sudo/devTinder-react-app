import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [skills, setSkills] = useState("");
    const [about, setAbout] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignup = async () => {
        try {
            setLoading(true);
            setError("");

            const payload = {
                firstName,
                lastName,
                age: Number(age),
                gender,
                emailId,
                password,
                phoneNumber,
                skills: skills.split(",").map((skill) => skill.trim()),
                about,
                photoUrl,
            };

            await axios.post(BASE_URL + "/signup", payload, {
                withCredentials: true,
            });

            navigate("/login");
        } catch (err) {
            setError(err?.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="flex justify-center my-10">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-6">

                <legend className="fieldset-legend text-2xl text-primary">
                    Sign Up
                </legend>

                {/* First Row */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="label">First Name</label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="label">Last Name</label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="label">Age</label>
                        <input
                            type="number"
                            className="input input-bordered w-full"
                            placeholder="Age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="label">Gender</label>
                        <select
                            className="select select-bordered w-full"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>

                {/* Third Row */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="input input-bordered w-full"
                            placeholder="Email"
                            value={emailId}
                            onChange={(e) => setEmailId(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="label">Phone Number</label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                </div>

                {/* Fourth Row */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="input input-bordered w-full"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="label">Skills</label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="e.g cricket,coding"
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                        />
                    </div>
                </div>

                {/* About */}
                <label className="label">About</label>
                <textarea
                    className="textarea textarea-bordered w-full"
                    placeholder="Tell about yourself"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                ></textarea>

                {/* Photo URL */}
                <label className="label">Profile Photo URL</label>
                <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Photo URL"
                    value={photoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                />

                {error && <p className="text-red-500 mt-2">{error}</p>}

                <button
                    className="btn btn-primary mt-6 w-full"
                    onClick={handleSignup}
                    disabled={loading}
                >
                    {loading ? (
                        <span className="loading loading-spinner loading-sm"></span>
                    ) : (
                        "Sign up"
                    )}
                </button>

            </fieldset>
        </div>
    );
}

export default Signup;