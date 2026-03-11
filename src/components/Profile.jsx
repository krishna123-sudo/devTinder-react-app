import React from 'react'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'

function Profile() {
    const userData = useSelector(store => store.user)
    return (
        <div className='flex justify-center my-10'><EditProfile userData={userData} /></div>
    )
}

export default Profile