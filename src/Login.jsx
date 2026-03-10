import axios from 'axios';
import React, { useState } from 'react'

function Login() {

    const [emailId, setEmailId] = useState("krishna@gmail.com");
    const [password, setPassword] = useState("Krishna@1234");

    const handleLogin = async () => {
        try {
            const res = await axios.post("http://localhost:7777/login", {
                emailId,
                password
            }, { withCredentials: true })
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='flex justify-center my-10 p-10'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend text-2xl text-blue-400">Login</legend>
                <div className='flex justify-center'>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                </div>

                <label className="label">Email</label>
                <input type="email" value={emailId} className="input" placeholder="Email"
                    onChange={(e) => setEmailId(e.target.value)}
                />

                <label className="label">Password</label>
                <input type="password" value={password} className="input" placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="btn btn-neutral mt-4"
                    onClick={handleLogin}
                >Login</button>
            </fieldset>
        </div>
    )
}

export default Login