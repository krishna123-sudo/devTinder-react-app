import React from 'react'
import NavBar from './components/NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { BASE_URL } from "./utils/constants"
import { addUser } from "./utils/userSlice"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

function Body() {
    const navigate = useNavigate();
    const disPatch = useDispatch();
    const userData = useSelector((store) => store.user.user)
    const fetchUser = async () => {
        if (userData) return;
        try {
            const res = await axios.get(BASE_URL + "/profile/view", {
                withCredentials: true
            })
            disPatch(addUser(res));
        } catch (err) {
            if (err.status === 401) {
                navigate("/login")
            }
            console.log(err);
        }
    }

    useEffect(() => {
        if (!userData) {
            fetchUser();
        }

    })

    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Body