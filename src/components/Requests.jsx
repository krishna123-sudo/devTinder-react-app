import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addRequest } from '../utils/requestsSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Requests() {
    const [loading, setLoading] = useState(false);
    const requestData = useSelector(store => store.request.request);
    let dataRequest = requestData;
    const navigate = useNavigate();
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

    const statusChange = async (status, reqId) => {
        try {
            setLoading(true);
            const res = await axios.post(BASE_URL + `/request/review/${status}/${reqId}`, {}, {
                withCredentials: true
            })
            toast.success(`request ${status} see the connections!!`)
            // if (status == "accepted") {
            //     navigate("/connections");
            // } else {
            //     navigate("/")
            // }
            fetchRequest()
        } catch (err) {

        } finally {
            setLoading(false);
        }
    }


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
                                    src={user?.fromUserId?.photoUrl}
                                    alt="profile"
                                />
                            </figure>

                            <div className="flex justify-center card-body text-center">
                                <h2 className="text-2xl">
                                    {user?.fromUserId?.firstName} {user.fromUserId?.lastName}
                                </h2>

                                <h2 className="text-xl">
                                    {user?.fromUserId?.skills.join(",")}
                                </h2>

                                <p>{user.fromUserId.about}</p>

                                <div className="flex justify-center gap-2">
                                    <button
                                        className="btn btn-error"
                                        onClick={() => statusChange("rejected", user._id)}
                                    >
                                        Rejected
                                    </button>
                                    <button className="btn btn-success"
                                        onClick={() => statusChange("accepted", user._id)}
                                    >
                                        Accepted

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
