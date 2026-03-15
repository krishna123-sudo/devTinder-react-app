// import axios from "axios";
// import React, { useState } from "react";
// import { BASE_URL } from "../utils/constants";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//     const navigate = useNavigate();

//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [age, setAge] = useState("");
//     const [gender, setGender] = useState("");
//     const [emailId, setEmailId] = useState("");
//     const [password, setPassword] = useState("");
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [skills, setSkills] = useState("");
//     const [about, setAbout] = useState("");
//     const [photoUrl, setPhotoUrl] = useState("");
//     const [error, setError] = useState("");
//     const [loading, setLoading] = useState(false);

//     const handleSignup = async () => {
//         try {
//             setLoading(true);
//             setError("");

//             const payload = {
//                 firstName,
//                 lastName,
//                 age: Number(age),
//                 gender,
//                 emailId,
//                 password,
//                 phoneNumber,
//                 skills: skills.split(",").map((skill) => skill.trim()),
//                 about,
//                 photoUrl,
//             };

//             await axios.post(BASE_URL + "/signup", payload, {
//                 withCredentials: true,
//             });

//             navigate("/login");
//         } catch (err) {
//             setError(err?.response?.data?.message || "Something went wrong");
//         } finally {
//             setLoading(false)
//         }
//     };

//     return (
//         <div className="flex justify-center my-10">
//             <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-6">

//                 <legend className="fieldset-legend text-2xl text-primary">
//                     Sign Up
//                 </legend>

//                 {/* First Row */}
//                 <div className="grid grid-cols-2 gap-4">
//                     <div>
//                         <label className="label">First Name<h1 className="text-red-600">*</h1></label>
//                         <input
//                             type="text"
//                             className="input input-bordered w-full"
//                             placeholder="First Name"
//                             value={firstName}
//                             onChange={(e) => setFirstName(e.target.value)}
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label className="label">Last Name<h1 className="text-red-600">*</h1></label>
//                         <input
//                             type="text"
//                             className="input input-bordered w-full"
//                             placeholder="Last Name"
//                             value={lastName}
//                             onChange={(e) => setLastName(e.target.value)}
//                             required
//                         />
//                     </div>
//                 </div>

//                 {/* Second Row */}
//                 <div className="grid grid-cols-2 gap-4">
//                     <div>
//                         <label className="label">Age</label>
//                         <input
//                             type="number"
//                             className="input input-bordered w-full"
//                             placeholder="Age"
//                             value={age}
//                             onChange={(e) => setAge(e.target.value)}
//                         />
//                     </div>

//                     <div>
//                         <label className="label">Gender<h1 className="text-red-600">*</h1></label>
//                         <select
//                             className="select select-bordered w-full"
//                             value={gender}
//                             onChange={(e) => setGender(e.target.value)}
//                             required
//                         >
//                             <option value="">Select Gender</option>
//                             <option value="male">Male</option>
//                             <option value="female">Female</option>
//                             <option value="others">others</option>
//                         </select>
//                     </div>
//                 </div>

//                 {/* Third Row */}
//                 <div className="grid grid-cols-2 gap-4">
//                     <div>
//                         <label className="label">Email<h1 className="text-red-600">*</h1></label>
//                         <input
//                             type="email"
//                             className="input input-bordered w-full"
//                             placeholder="Email"
//                             value={emailId}
//                             onChange={(e) => setEmailId(e.target.value)}
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label className="label">Phone Number<h1 className="text-red-600">*</h1></label>
//                         <input
//                             type="text"
//                             className="input input-bordered w-full"
//                             placeholder="Phone Number"
//                             value={phoneNumber}
//                             onChange={(e) => setPhoneNumber(e.target.value)}
//                             required
//                         />
//                     </div>
//                 </div>

//                 {/* Fourth Row */}
//                 <div className="grid grid-cols-2 gap-4">
//                     <div>
//                         <label className="label">Password<h1 className="text-red-600">*</h1></label>
//                         <input
//                             type="password"
//                             className="input input-bordered w-full"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label className="label">Skills</label>
//                         <input
//                             type="text"
//                             className="input input-bordered w-full"
//                             placeholder="e.g cricket,coding"
//                             value={skills}
//                             onChange={(e) => setSkills(e.target.value)}
//                         />
//                     </div>
//                 </div>

//                 {/* About */}
//                 <label className="label">About</label>
//                 <textarea
//                     className="textarea textarea-bordered w-full"
//                     placeholder="Tell about yourself"
//                     value={about}
//                     onChange={(e) => setAbout(e.target.value)}
//                 ></textarea>

//                 {/* Photo URL */}
//                 <label className="label">Profile Photo URL<h1 className="text-red-600">*</h1></label>
//                 <input
//                     type="text"
//                     className="input input-bordered w-full"
//                     placeholder="Photo URL"
//                     value={photoUrl}
//                     onChange={(e) => setPhotoUrl(e.target.value)}
//                     required
//                 />

//                 {error && <p className="text-red-500 mt-2">{error}</p>}

//                 <button
//                     className="btn btn-primary mt-6 w-full"
//                     onClick={handleSignup}
//                     disabled={loading}
//                 >
//                     {loading ? (
//                         <span className="loading loading-spinner loading-sm"></span>
//                     ) : (
//                         "Sign up"
//                     )}
//                 </button>

//             </fieldset>
//         </div>
//     );
// }

// export default Signup;

import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useNavigate, Link } from "react-router-dom";

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

            setLoading(true)
            setError("")

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
                photoUrl
            }

            await axios.post(BASE_URL + "/signup", payload, { withCredentials: true })

            navigate("/login")

        } catch (err) {
            setError(err?.response?.data?.message || "Something went wrong")
        } finally {
            setLoading(false)
        }

    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 p-6">

            {/* glow background */}
            <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-[150px] opacity-20"></div>

            <fieldset className="relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl w-full max-w-3xl p-8 shadow-2xl">

                <h2 className="text-3xl text-center font-bold text-pink-400 mb-6">
                    Create DevTinder Profile 💻🔥
                </h2>

                {/* row 1 */}

                <div className="grid md:grid-cols-2 gap-4">

                    <div>
                        <label className="label text-gray-200">First Name *</label>
                        <input type="text"
                            className="input input-bordered w-full bg-black/40 text-white"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="label text-gray-200">Last Name *</label>
                        <input type="text"
                            className="input input-bordered w-full bg-black/40 text-white"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                </div>

                {/* row 2 */}

                <div className="grid md:grid-cols-2 gap-4 mt-3">

                    <div>
                        <label className="label text-gray-200">Age</label>
                        <input type="number"
                            className="input input-bordered w-full bg-black/40 text-white"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="label text-gray-200">Gender *</label>
                        <select
                            className="select select-bordered w-full bg-black/40 text-white"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                    </div>

                </div>

                {/* row 3 */}

                <div className="grid md:grid-cols-2 gap-4 mt-3">

                    <div>
                        <label className="label text-gray-200">Email *</label>
                        <input type="email"
                            className="input input-bordered w-full bg-black/40 text-white"
                            value={emailId}
                            onChange={(e) => setEmailId(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="label text-gray-200">Phone *</label>
                        <input type="text"
                            className="input input-bordered w-full bg-black/40 text-white"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>

                </div>

                {/* row 4 */}

                <div className="grid md:grid-cols-2 gap-4 mt-3">

                    <div>
                        <label className="label text-gray-200">Password *</label>
                        <input type="password"
                            className="input input-bordered w-full bg-black/40 text-white"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="label text-gray-200">Skills</label>
                        <input type="text"
                            className="input input-bordered w-full bg-black/40 text-white"
                            placeholder="React, Node, Java"
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                        />
                    </div>

                </div>

                {/* about */}

                <div className="mt-3">
                    <label className="label text-gray-200">About</label>
                    <textarea
                        className="textarea textarea-bordered w-full bg-black/40 text-white"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                    ></textarea>
                </div>

                {/* photo */}

                <div className="mt-3">
                    <label className="label text-gray-200">Profile Photo URL *</label>
                    <input type="text"
                        className="input input-bordered w-full bg-black/40 text-white"
                        value={photoUrl}
                        onChange={(e) => setPhotoUrl(e.target.value)}
                    />
                </div>

                {error && <p className="text-red-400 mt-3">{error}</p>}

                <button
                    className="btn w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 border-none hover:scale-105 transition"
                    onClick={handleSignup}
                    disabled={loading}
                >
                    {loading ? (
                        <span className="loading loading-spinner loading-sm"></span>
                    ) : (
                        "Create Account"
                    )}
                </button>

                <p className="text-center text-gray-300 mt-5">
                    Already have an account?{" "}
                    <Link to="/login" className="text-pink-400 hover:underline">
                        Login
                    </Link>
                </p>

            </fieldset>

        </div>

    )

}

export default Signup