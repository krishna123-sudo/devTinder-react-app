import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/FeedSlice';
import UserCard from './UserCard';
import Loader from '../Loader';

function Feed() {
    const disPatch = useDispatch();
    const DataStore = useSelector(store => store.feed.feed)
    const fetchFeed = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/connection", {
                withCredentials: true
            })

            disPatch(addFeed(res.data.data));

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (!DataStore) {
            fetchFeed();
        }
    }, [])

    if (!DataStore) return (
        <div className='flex justify-center my-20'>
            <Loader />
        </div>
    )

    return (
        <div className='flex justify-center my-10'>
            <UserCard userfeed={DataStore} />
        </div>
    )
}

export default Feed