import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { toast } from "react-toastify";

function UserCard({ userfeed, fetchFeed }) {
    // console.log(userfeed);
    const [index, setIndex] = useState(0);

    const apiIntrestedIgnore = async (status, reqId) => {
        try {
            const res = await axios.post(BASE_URL + `/request/send/${status}/${reqId}`, {}, {
                withCredentials: true
            })
            toast.success(`Rquest ${status}`)
            const nextIndex = index + 1;
            if (nextIndex >= userfeed.length) {
                fetchFeed();
                setIndex(0)
            } else {
                setIndex(nextIndex);
            }
        } catch (err) {
            consoler.log(err)
        }
    }

    const user = userfeed[index]

    return (
        <div className="card bg-base-300 w-80 shadow-sm">

            <figure className="px-10 pt-10">
                <img
                    src={user.photoUrl}
                    alt="profile"
                    className="rounded-xl"
                />
            </figure>

            <div className="card-body items-center text-center">

                <h2 className="card-title">
                    {user.firstName} {user.lastName}
                </h2>

                <p>{user.skills?.join(", ")}</p>

                <p>{user.about}</p>

                <div className="card-actions">

                    <button
                        className="btn btn-error"
                        onClick={() => apiIntrestedIgnore("ignore", user._id)}
                    >
                        Ignore
                    </button>

                    <button
                        className="btn btn-success"
                        onClick={() => apiIntrestedIgnore("intrested", user._id)}
                    >
                        Interested
                    </button>

                </div>
            </div>
        </div>
    );
}

export default UserCard;