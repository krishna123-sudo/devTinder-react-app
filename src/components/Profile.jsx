import React, { useEffect, useState } from 'react'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'

function Profile() {
    // const userData = useSelector(store => store.user)
    const [data, setData] = useState("");
    const fetchProfile = async () => {
        try {
            const res = await axios.get(BASE_URL + "/profile/view", {
                withCredentials: true
            });
            setData(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchProfile();
    }, [])

    return (
        <div className='flex justify-center my-10'><EditProfile userData={data} /></div>
    )
}

export default Profile