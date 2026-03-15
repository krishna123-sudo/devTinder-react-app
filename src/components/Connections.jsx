import React, { useEffect } from 'react'
import UserCard from './UserCard'
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../utils/connectionSlice';

function Connections() {
    const disPatch = useDispatch();
    const connectionData = useSelector(store => store.connections.connections)
    const connections = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/connection", {
                withCredentials: true
            });
            // console.log(res.data.data)
            disPatch(addConnections(res?.data?.data))
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        connections();
    }, [])

    if (!connectionData) return null;

    return (
        <div className='flex justify-center my-10 gap-6 flex-wrap'>
            {connectionData.length === 0 ? (
                <p>You have no connections yet.</p>
            ) : (
                connectionData.map((user) => (
                    <div key={user._id} className="card bg-base-200 shadow-sm rounded-xl">
                        <figure>
                            <img className='my-2.5 rounded-full'
                                src={user?.photoUrl}
                                alt="profile"
                            />
                        </figure>

                        <div className="flex justify-center card-body text-center">
                            <h2 className="text-2xl">
                                {user?.firstName} {user?.lastName}
                            </h2>

                            <h2 className="text-xl">
                                {user?.skills.join(",")}
                            </h2>

                            <p>{user?.about}</p>

                            <div className="card-actions justify-center p-4">
                                <button className="btn btn-primary">
                                    Message
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Connections