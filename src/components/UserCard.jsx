import React from "react";

function UserCard({ userfeed }) {
    // console.log(userfeed);
    return (
        <div className="flex flex-wrap justify-center gap-6">
            {userfeed.map((user) => (
                <div key={user._id} className="card bg-base-300 w-96 shadow-sm">
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

                        <p>{user.skills.join(", ")}</p>

                        <p>{user.about}</p>

                        <div className="card-actions">
                            <button className="btn btn-error">Ignore</button>
                            <button className="btn btn-success">Interested</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UserCard;