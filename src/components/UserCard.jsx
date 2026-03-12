import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { toast } from "react-toastify";

function UserCard({ userfeed }) {
    // console.log(userfeed);

    const apiIntrestedIgnore = async (status, reqId) => {
        try {
            const res = await axios.post(BASE_URL + `/request/send/${status}/${reqId}`, {}, {
                withCredentials: true
            })
            toast.success(`Rquest ${status}`)
        } catch (err) {
            consoler.log(err)
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-6">
            {userfeed.map((user) => (
                <div key={user._id} className="card bg-base-300 w-80 shadow-sm">
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
                            <button className="btn btn-error"
                                onClick={() => apiIntrestedIgnore("ignore", user._id)}
                            >Ignore</button>
                            <button className="btn btn-success"
                                onClick={() => apiIntrestedIgnore("intrested", user._id)}
                            >Interested</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UserCard;