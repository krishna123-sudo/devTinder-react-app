import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import { toast } from 'react-toastify';


function Login() {

    const [emailId, setEmailId] = useState("krishna@gmail.com");
    const [password, setPassword] = useState("Krishna@1234");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogin = async () => {
        try {
            const res = await axios.post(BASE_URL + "/login", {
                emailId,
                password
            }, { withCredentials: true })
            dispatch(addUser(res.data));
            toast.success("Logged in sucessfully")
            navigate("/");
        } catch (err) {
            setError(err.response?.data?.message || err.message);
            // console.log(err);
        }
    }

    return (
        <div className='flex justify-center my-10 p-10'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend text-2xl text-blue-400">Login</legend>
                <div className='flex justify-center'>
                </div>

                <label className="label">Email</label>
                <input type="email" value={emailId} className="input" placeholder="Email"
                    onChange={(e) => setEmailId(e.target.value)}
                />

                <label className="label">Password</label>
                <input type="password" value={password} className="input" placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className='text-red-400'>{error}</p>
                <button className="btn btn-neutral mt-4"
                    onClick={handleLogin}
                >Login</button>

                <p className="text-center text-sm mt-5"> Don't have an account?{" "}
                    <Link to="/signup"
                        className="text-primary font-semibold hover:underline">
                        Sign up
                    </Link>
                </p>
            </fieldset>
        </div>
    )
}

export default Login