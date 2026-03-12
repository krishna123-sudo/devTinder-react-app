import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addRequest } from '../utils/requestsSlice';

function Requests() {
    const requestData = useSelector(store => store.request.request);
    let dataRequest = requestData;
    const disPatch = useDispatch();
    const fetchRequest = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/requests/recieved", {
                withCredentials: true
            })
            // console.log(res)
            disPatch(addRequest(res.data.data));
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchRequest();
    }, [])


    if (!dataRequest) return null;

    return (
        <div>
            <h1 className='flex justify-center my-10 text-3xl'>My requests</h1>
            <div className='flex justify-center my-10 gap-6 flex-wrap'>
                {dataRequest.length === 0 ? (
                    <p>You have no connections yet.</p>
                ) : (
                    dataRequest.map((user) => (
                        <div key={user._id} className="card bg-base-200 shadow-sm rounded-xl">
                            <figure>
                                <img className='my-2.5 rounded-full'
                                    src={user?.toUserId?.photoUrl}
                                    alt="profile"
                                />
                            </figure>

                            <div className="flex justify-center card-body text-center">
                                <h2 className="text-2xl">
                                    {user?.toUserId?.firstName} {user.toUserId?.lastName}
                                </h2>

                                <h2 className="text-xl">
                                    {user?.toUserId?.skills.join(",")}
                                </h2>

                                <p>{user.toUserId.about}</p>

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
        </div>

    )
}

export default Requests
