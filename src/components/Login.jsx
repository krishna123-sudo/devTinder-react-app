import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import { toast } from 'react-toastify';


function Login() {

    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogin = async () => {
        try {
            setLoading(true);
            const res = await axios.post(BASE_URL + "/login", {
                emailId,
                password
            }, { withCredentials: true })
            dispatch(addUser(res?.data));
            toast.success("Logged in sucessfully")
            navigate("/");
        } catch (err) {
            setError(err?.response?.data?.message || err?.message);
            // console.log(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        // <div className='flex justify-center my-10 p-10'>
        //     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        //         <legend className="fieldset-legend text-2xl text-blue-400">Login</legend>
        //         <div className='flex justify-center'>
        //         </div>

        //         <label className="label">Email</label>
        //         <input type="email" value={emailId} className="input" placeholder="Email"
        //             onChange={(e) => setEmailId(e.target.value)}
        //         />

        //         <label className="label">Password</label>
        //         <input type="password" value={password} className="input" placeholder="Password"
        //             onChange={(e) => setPassword(e.target.value)}
        //         />

        //         <p className='text-red-400'>{error}</p>
        //         <button className="btn btn-neutral mt-4"
        //             onClick={handleLogin}
        //             disabled={loading}
        //         >
        //             {loading ? (
        //                 <span className="loading loading-spinner loading-sm"></span>
        //             ) : (
        //                 "Login"
        //             )}
        //         </button>

        //         <p className="text-center text-sm mt-5"> Don't have an account?{" "}
        //             <Link to="/signup"
        //                 className="text-primary font-semibold hover:underline">
        //                 Sign up
        //             </Link>
        //         </p>
        //     </fieldset>
        // </div>
        <div className="min-h-screen flex items-center justify-center 
bg-gradient-to-br from-black via-gray-900 to-purple-900">

            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-[150px] opacity-20"></div>

            <fieldset className="relative backdrop-blur-lg bg-white/10 border border-white/20 
  rounded-2xl w-96 p-8 shadow-2xl">

                <legend className="text-3xl font-bold text-center text-pink-400 mb-2">
                    DevTinder ❤️‍🔥
                </legend>

                <p className="text-center text-gray-300 mb-6">
                    Connect with Developers
                </p>

                <label className="label text-gray-200">Email</label>
                <input
                    type="email"
                    value={emailId}
                    className="input input-bordered w-full bg-black/40 text-white"
                    placeholder="dev@example.com"
                    onChange={(e) => setEmailId(e.target.value)}
                />

                <label className="label text-gray-200 mt-3">Password</label>
                <input
                    type="password"
                    value={password}
                    className="input input-bordered w-full bg-black/40 text-white"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <p className="text-red-400 text-sm mt-2">{error}</p>

                <button
                    className="btn w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-600 border-none hover:scale-105 transition"
                    onClick={handleLogin}
                    disabled={loading}
                >
                    {loading ? (
                        <span className="loading loading-spinner loading-sm"></span>
                    ) : (
                        "Login"
                    )}
                </button>

                <p className="text-center text-sm mt-6 text-gray-300">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-pink-400 font-semibold hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </fieldset>
        </div>
    )
}

export default Login